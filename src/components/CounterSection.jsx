import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './CounterSection.css'

const START_DATE = new Date('2025-10-13T00:00:00')
function getElapsed() {
  const diffMs = Math.max(0, new Date() - START_DATE)
  const totalSeconds = Math.floor(diffMs / 1000)
  return { days: Math.floor(totalSeconds / 86400), hours: Math.floor((totalSeconds % 86400) / 3600), minutes: Math.floor((totalSeconds % 3600) / 60), seconds: totalSeconds % 60 }
}

export default function CounterSection() {
  const [elapsed, setElapsed] = useState(getElapsed())
  useEffect(() => { const interval = setInterval(() => setElapsed(getElapsed()), 1000); return () => clearInterval(interval) }, [])
  const units = [{ label: 'يوم', value: elapsed.days }, { label: 'ساعة', value: elapsed.hours }, { label: 'دقيقة', value: elapsed.minutes }, { label: 'ثانية', value: elapsed.seconds }]
  return <section className="counter-section">
    <motion.div className="section-header" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
      <span className="section-tag">من يوم 13/10/2025</span><h2 className="section-title">بقالنا سوا</h2><p className="section-subtitle">وكل ثانية بتعدي بتخليني أحبك أكتر ♥</p>
    </motion.div>
    <div className="counter-grid">{units.map((unit, i) => <motion.div key={unit.label} className="counter-card" initial={{ opacity: 0, y: 30, scale: 0.9 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, delay: i * 0.1 }}><span className="counter-value">{unit.value}</span><span className="counter-label">{unit.label}</span></motion.div>)}</div>
    <div className="counter-milestones"><span>أول ما عرفنا بعض: <b>30/5/2024</b></span><span>أول مرة اتقابلنا: <b>12/8/2024</b></span><span>أول ما ارتبطنا: <b>13/10/2025</b></span></div>
  </section>
}
