'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { IoCallOutline, IoMailOutline, IoLocationOutline, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export default function Contact() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);
        setErrorMessage('');

        try {
            const serviceId = 'service_jscaze8';
            const templateId = 'template_43b6mn8';
            const publicKey = 'scgU9fut_5vL5Iv7x';

            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                subject: formData.subject,
                message: formData.message
            };

            await emailjs.send(serviceId, templateId, templateParams, publicKey);

            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            console.error('Error sending email:', error);
            setSubmitStatus('error');
            setErrorMessage('Failed to send your message. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden bg-white/50 dark:bg-gray-900/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl sm:text-5xl font-bold font-outfit text-foreground mb-4">Let&apos;s Connect</h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"></div>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-inter">
                        Have a groundbreaking idea? Let&apos;s build <span className="text-primary font-semibold">something extraordinary</span> together.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <motion.div
                        className="lg:col-span-5"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-2xl font-bold font-outfit text-foreground mb-8 text-gradient">Contact Information</h3>

                        <div className="space-y-6">
                            {[
                                { icon: <IoCallOutline />, title: 'Phone', value: '+92 332 2497 339' },
                                { icon: <IoMailOutline />, title: 'Email', value: 'engr.tassadaq@gmail.com' },
                                { icon: <IoLocationOutline />, title: 'Office', value: 'Lahore, Pakistan' }
                            ].map((info, i) => (
                                <div key={i} className="glass flex items-center p-6 rounded-2xl border border-white/10 group hover:border-primary/50 transition-colors duration-500">
                                    <div className="h-14 w-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                                        {info.icon}
                                    </div>
                                    <div className="ml-6">
                                        <p className="text-sm font-bold text-primary/70 uppercase tracking-widest">{info.title}</p>
                                        <p className="text-lg font-semibold text-foreground">{info.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12">
                            <h4 className="text-lg font-bold font-outfit text-foreground mb-6">Digital Ecosystem</h4>
                            <div className="flex space-x-4">
                                <a href="https://github.com/tassadaqtechstream" target="_blank" className="h-12 w-12 glass rounded-xl flex items-center justify-center text-2xl hover:bg-primary hover:text-white transition-all duration-300"><IoLogoGithub /></a>
                                <a href="https://linkedin.com/in/tassadaqhussain" target="_blank" className="h-12 w-12 glass rounded-xl flex items-center justify-center text-2xl hover:bg-primary hover:text-white transition-all duration-300"><IoLogoLinkedin /></a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="lg:col-span-7"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <form onSubmit={handleSubmit} className="glass p-10 rounded-[2rem] border border-white/10 shadow-2xl space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-bold text-foreground/70 ml-2">Display Name</label>
                                    <input
                                        type="text" id="name" name="name"
                                        value={formData.name} onChange={handleChange} required
                                        className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none text-foreground font-medium"
                                        placeholder="Tassadaq Hussain"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-bold text-foreground/70 ml-2">Email Address</label>
                                    <input
                                        type="email" id="email" name="email"
                                        value={formData.email} onChange={handleChange} required
                                        className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none text-foreground font-medium"
                                        placeholder="engr.tassadaq@gmail.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-bold text-foreground/70 ml-2">Subject</label>
                                <input
                                    type="text" id="subject" name="subject"
                                    value={formData.subject} onChange={handleChange} required
                                    className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none text-foreground font-medium"
                                    placeholder="Brief summary of inquiry"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-bold text-foreground/70 ml-2">Detailed Brief</label>
                                <textarea
                                    id="message" name="message"
                                    value={formData.message} onChange={handleChange} required rows={5}
                                    className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none text-foreground font-medium resize-none"
                                    placeholder="Tell me about your amazing project..."
                                />
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-5 bg-primary text-white font-bold rounded-2xl shadow-xl shadow-primary/30 hover:shadow-primary/50 transition-all disabled:opacity-50 flex items-center justify-center gap-3 text-lg"
                            >
                                {isSubmitting ? 'Transmitting Data...' : 'Initiate Contact'}
                            </motion.button>

                            {submitStatus === 'success' && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 bg-green-500/10 border border-green-500/20 text-green-500 rounded-xl text-center font-bold">
                                    Message transmitted successfully. I&apos;ll be in touch soon.
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
