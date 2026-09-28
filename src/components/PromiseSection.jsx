import { motion } from 'framer-motion'
import './PromiseSection.css'

export default function PromiseSection() {
  return <section className="promise-section">
    <motion.div className="promise-block" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
      <span className="section-tag">وعد</span>
      <p className="promise-text">بوعدك إني هفضل زي ما إنت عارفني، بنوتك اللي بتحبك وملهاش غيرك، وهفضل جنبك في كل حاجة: سندك وضهرك وحضنك وبيتك، والمكان اللي ترتاح فيه وتكون متطمن وحاسس بالأمان ♥</p>
    </motion.div>
    <motion.div className="poem-block" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.2 }}>
      <span className="section-tag">طول العمر</span>
      <p className="poem-text">هفضل أحبك بنفس الشكل ده ويمكن أكتر، وهفضل أخاف عليك بنفس الشكل ده والطريقة دي مش أكتر ولا أقل.<br /><br />هفضل حاسة إنك بيتي وإنك الأمان اللي بدور عليه.<br /><br />مهما الأيام اتغيرت وحياتنا اختلفت، هفضل شيفاك زي أول يوم بالظبط، وحتى لو كبرنا وكل حاجة حوالينا اتغيرت هيفضل حبي ليك زي ما هو من غير نهاية.<br /><br />هفضل مبسوطة إني عرفتك وفخورة إنك اخترتني، وإنك أجمل صدفة حصلتلي في حياتي، ومستنياك في كل مرحلة جاية في حياتنا.<br /><br />هفضل بحبك بطريقتي وبشكلي اللي إنت متعود عليه، وهفضل حاسة إني محظوظة إني لقيتك ♥♥♥</p>
    </motion.div>
  </section>
}
