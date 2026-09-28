import { motion } from 'framer-motion'
import './MissingYouSection.css'

const lines = [
  'البيت حاسس إنه فاضي من غيرك',
  'بدوّر عليك وسط أي زحمة',
  'ببص في التليفون كل شوية أشوف رديت ولا لسه',
  'مش بيجيلي نوم وإنت مش في بالي',
  'حاسة إن ناقص حاجة، وإنت الحاجة',
  'حتى وأنا بضحك مع الناس جوايا بفكر فيك',
  'بزهق بسرعة من غير صوتك',
  'وحشني صوتك الصبح وهو بيقولي صباح الخير، ووحشني بليل وهو بيقولي تصبحي على حاجة حلوة شبهك يا بنوتي "بحبك"🥺',
  'كل حاجة حواليا بترجعني ليك',
  'إنت أول واحد بفكر فيه أول ما أصحى وآخر واحد قبل ما أنام',
  'صوتك بس اللي بيريحني ولو غاب شوية بحس إن يومي ناقص أو جوايا شيء ناقص',
  'من غيرك حاسة إني تايهة وإنت اللي بترجعني لنفسي',
]

export default function MissingYouSection() {
  return <section className="missing-section"><motion.div className="section-header" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}><span className="section-tag">وحشتني</span><h2 className="section-title">وحشتني</h2><p className="section-subtitle">كلمة وحشتني دي مش مجرد كلمة بسيطة خالص.. فيها معاني كتير أوي خليك معايا لحد آخرها ♥</p></motion.div><div className="missing-list">{lines.map((line, i) => <motion.div key={i} className="missing-line" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, delay: i * 0.06 }}><span className="missing-heart">♥</span><span className="missing-word">وحشتني</span><span className="missing-text">.. يعني {line}</span></motion.div>)}</div><motion.p className="missing-closing" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}>بس خلاصة الكلام كله.. وحشتني أوي بجد♥️🫂🥺</motion.p></section>
}
