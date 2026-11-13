"use client";
import { useState } from 'react';
import styles from './contact-v2.module.css';

export default function ContactPage(){
  const [status,setStatus]=useState('idle');
  async function submit(event){
    event.preventDefault();
    if(status==='submitting')return;
    const form=event.currentTarget;
    setStatus('submitting');
    try{
      const response=await fetch('https://formspree.io/f/mnnkwqkg',{method:'POST',body:new FormData(form),headers:{Accept:'application/json'}});
      if(!response.ok)throw new Error(`Form submission failed: ${response.status}`);
      form.reset();setStatus('success');
    }catch{setStatus('error');}
  }
  return <section className={styles.page} aria-labelledby="contact-title"><div className={styles.wrap}>
    <p className={styles.eyebrow}>CONTACT / LET&apos;S CONNECT</p><h1 id="contact-title">Let&apos;s build something useful.</h1>
    <p className={styles.lead}>Open to junior full-stack and frontend opportunities. Reach out to discuss a role, project or collaboration.</p>
    <div className={styles.grid}>
      <div className={styles.panel}><h2>Send a message</h2><p>A short introduction is enough. I&apos;ll reply by email.</p>
        <form onSubmit={submit}>
          <input type="hidden" name="_subject" value="New message from dev.robb portfolio"/>
          <label htmlFor="contact-name">Name</label><input id="contact-name" name="name" autoComplete="name" required placeholder="Your name"/>
          <label htmlFor="contact-email">Email</label><input id="contact-email" name="email" type="email" autoComplete="email" required placeholder="you@example.com"/>
          <label htmlFor="contact-message">Message</label><textarea id="contact-message" name="message" required rows={5} placeholder="Your message..."/>
          <button type="submit" disabled={status==='submitting'}>{status==='submitting'?'Sending…':'Send message ↗'}</button>
          <div aria-live="polite" role="status" className={styles.status}>{status==='success'?'Message sent. Thank you — I will reply by email.':status==='error'?'The message could not be sent. Please try again or email me directly.':''}</div>
        </form>
      </div>
      <div className={styles.panel}><h2>Find me online</h2><p>Want to review my code or connect professionally? These are the best places to start.</p>
        <div className={styles.links}>
          <a href="mailto:robbertasselt@gmail.com"><span>EMAIL</span><strong>robbertasselt@gmail.com ↗</strong></a>
          <a href="https://github.com/RobbvA" target="_blank" rel="noopener noreferrer"><span>GITHUB</span><strong>github.com/RobbvA ↗</strong></a>
          <a href="https://www.linkedin.com/in/robbert-van-asselt-a79426155/" target="_blank" rel="noopener noreferrer"><span>LINKEDIN</span><strong>Connect on LinkedIn ↗</strong></a>
          <a href="https://www.instagram.com/dev.robb/" target="_blank" rel="noopener noreferrer"><span>INSTAGRAM</span><strong>@dev.robb ↗</strong></a>
        </div>
      </div>
    </div>
  </div></section>
}
