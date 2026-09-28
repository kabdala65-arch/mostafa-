import { motion } from 'framer-motion'
import './MeaningSection.css'

const letters = [
  { l: 'م', text: 'مفيش في قلبي أغلى منك' },
  { l: 'ص', text: 'صوتك بيطمني وبيخلّي كل حاجة تهون' },
  { l: 'ط', text: 'طيب وحنين ووجودك أمان' },
  { l: 'ف', text: 'فرحتي الحقيقية وكل دنيتي' },
  { l: 'ى', text: 'يا كل العمر.. بحبك من غير نهاية' },
]

export default function MeaningSection() {
  return (
    <section className="meaning-section">
      <motion.div className="section-header" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
        <span className="section-tag">مصطفى</span>
        <h2 className="section-title">معنى اسمك عندي</h2>
        <p className="section-subtitle">كل حرف في اسمك ليه معنى كبير في قلبي ♥</p>
      </motion.div>
      <div className="meaning-grid">
        {letters.map((item, i) => <motion.div key={i} className="meaning-card" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, delay: i * 0.12 }}><span className="meaning-letter">{item.l}</span><span className="meaning-text">{item.text}</span></motion.div>)}
      </div>
    </section>
  )
}
