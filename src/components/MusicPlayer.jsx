import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { registerMedia, notifyPlaying, notifyStopped } from '../utils/mediaCoordinator'
import './MusicPlayer.css'

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [songAvailable, setSongAvailable] = useState(true)
  const audioRef = useRef(null)
  const songSrc = '/music/our-song.mp3'

  const tryPlay = () => {
    const audio = audioRef.current
    if (!audio || !songAvailable) return
    audio.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false))
  }

  useEffect(() => registerMedia('music', {
    pause: () => { audioRef.current?.pause(); setIsPlaying(false) },
    resume: () => tryPlay(),
  }), [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    const updateProgress = () => { if (audio.duration) setProgress((audio.currentTime / audio.duration) * 100) }
    const onPlay = () => notifyPlaying('music')
    const onPause = () => notifyStopped('music')
    audio.addEventListener('timeupdate', updateProgress)
    audio.addEventListener('play', onPlay)
    audio.addEventListener('pause', onPause)
    audio.addEventListener('error', () => setSongAvailable(false))
    return () => {
      audio.removeEventListener('timeupdate', updateProgress)
      audio.removeEventListener('play', onPlay)
      audio.removeEventListener('pause', onPause)
    }
  }, [])

  useEffect(() => {
    // التشغيل التلقائي عند فتح الموقع؛ بعض المتصفحات تسمح به وبعضها يؤجله لأول تفاعل.
    tryPlay()
    const retryOnInteraction = () => { tryPlay(); document.removeEventListener('pointerdown', retryOnInteraction); document.removeEventListener('keydown', retryOnInteraction) }
    document.addEventListener('pointerdown', retryOnInteraction, { once: true })
    document.addEventListener('keydown', retryOnInteraction, { once: true })
    return () => { document.removeEventListener('pointerdown', retryOnInteraction); document.removeEventListener('keydown', retryOnInteraction) }
  }, [])

  const togglePlay = () => {
    if (!songAvailable) return
    if (isPlaying) audioRef.current.pause()
    else tryPlay()
  }

  return <motion.div className="music-player" initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 1 }}>
    <audio ref={audioRef} src={songSrc} loop onError={() => setSongAvailable(false)} />
    <button className={`play-disc ${isPlaying ? 'playing' : ''}`} onClick={togglePlay} aria-label={isPlaying ? 'إيقاف' : 'تشغيل'}>{isPlaying ? '❚❚' : '▶'}</button>
    <div className="player-info"><div className="player-top"><span className="song-title">أغنيتنا <span className="song-heart">♥</span></span><span className="player-status">{isPlaying ? 'يتم التشغيل الآن' : songAvailable ? 'اضغط للتشغيل' : 'أضف ملف الأغنية'}</span></div><div className="progress-track"><div className="progress-fill" style={{ width: `${progress}%` }} /></div></div>
  </motion.div>
}
