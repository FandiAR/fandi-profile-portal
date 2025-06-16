
import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';

export const ContactForm = () => {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className={`py-20 ${isDark ? 'bg-black text-green-400' : 'bg-gradient-to-br from-slate-50 to-blue-50 text-blue-900'}`}>
      <div className="container mx-auto max-w-4xl px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 font-mono ${
            isDark ? 'text-green-400' : 'text-blue-600'
          }`}>
            {isDark ? '> GET_IN_TOUCH' : 'Get In Touch'}
          </h2>
          <p className={`text-xl font-mono ${
            isDark ? 'text-green-300' : 'text-blue-700'
          }`}>
            {isDark ? '[LET\'S BUILD SOMETHING AMAZING TOGETHER]' : 'Let\'s build something amazing together'}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className={`p-8 border ${
            isDark 
              ? 'border-green-400 bg-black' 
              : 'border-blue-200 bg-white shadow-lg rounded-xl'
          }`}>
            <h3 className={`text-2xl font-bold mb-6 font-mono ${
              isDark ? 'text-green-400' : 'text-blue-600'
            }`}>
              {isDark ? '> CONTACT_INFO' : 'Contact Information'}
            </h3>
            
            <div className="space-y-6">
              <a 
                href="mailto:fandiagusriyanto@gmail.com"
                className={`flex items-center transition-colors font-mono ${
                  isDark 
                    ? 'text-green-300 hover:text-green-100' 
                    : 'text-blue-700 hover:text-blue-600'
                }`}
              >
                <Mail size={20} className="mr-4" />
                fandiagusriyanto@gmail.com
              </a>
              
              <a 
                href="tel:+6281316844738"
                className={`flex items-center transition-colors font-mono ${
                  isDark 
                    ? 'text-green-300 hover:text-green-100' 
                    : 'text-blue-700 hover:text-blue-600'
                }`}
              >
                <Phone size={20} className="mr-4" />
                +62 813-1684-4738
              </a>
              
              <div className={`flex items-center font-mono ${
                isDark ? 'text-green-300' : 'text-blue-700'
              }`}>
                <MessageSquare size={20} className="mr-4" />
                Available for collaborations
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`p-8 border ${
            isDark 
              ? 'border-green-400 bg-black' 
              : 'border-blue-200 bg-white shadow-lg rounded-xl'
          }`}>
            {isSubmitted ? (
              <div className={`text-center py-8 ${
                isDark ? 'text-green-400' : 'text-blue-600'
              }`}>
                <h3 className="text-2xl font-bold mb-4 font-mono">
                  {isDark ? '> MESSAGE_SENT!' : 'Message Sent!'}
                </h3>
                <p className="font-mono">
                  {isDark ? '[THANK YOU FOR REACHING OUT]' : 'Thank you for reaching out!'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder={isDark ? '> YOUR_NAME' : 'Your Name'}
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full p-3 border font-mono ${
                      isDark 
                        ? 'bg-black border-green-400 text-green-400 placeholder-green-500 focus:border-green-300' 
                        : 'bg-white border-blue-200 text-blue-900 placeholder-blue-400 focus:border-blue-400 rounded'
                    } focus:outline-none transition-colors`}
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder={isDark ? '> YOUR_EMAIL' : 'Your Email'}
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full p-3 border font-mono ${
                      isDark 
                        ? 'bg-black border-green-400 text-green-400 placeholder-green-500 focus:border-green-300' 
                        : 'bg-white border-blue-200 text-blue-900 placeholder-blue-400 focus:border-blue-400 rounded'
                    } focus:outline-none transition-colors`}
                  />
                </div>
                
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder={isDark ? '> SUBJECT' : 'Subject'}
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`w-full p-3 border font-mono ${
                      isDark 
                        ? 'bg-black border-green-400 text-green-400 placeholder-green-500 focus:border-green-300' 
                        : 'bg-white border-blue-200 text-blue-900 placeholder-blue-400 focus:border-blue-400 rounded'
                    } focus:outline-none transition-colors`}
                  />
                </div>
                
                <div>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder={isDark ? '> YOUR_MESSAGE' : 'Your Message'}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className={`w-full p-3 border font-mono resize-none ${
                      isDark 
                        ? 'bg-black border-green-400 text-green-400 placeholder-green-500 focus:border-green-300' 
                        : 'bg-white border-blue-200 text-blue-900 placeholder-blue-400 focus:border-blue-400 rounded'
                    } focus:outline-none transition-colors`}
                  />
                </div>
                
                <Button 
                  type="submit"
                  className={`w-full font-mono transition-all duration-300 ${
                    isDark 
                      ? 'bg-transparent border border-green-400 text-green-400 hover:bg-green-400 hover:text-black' 
                      : 'bg-blue-600 text-white hover:bg-blue-700 border border-blue-600'
                  }`}
                >
                  <Send className="mr-2" size={20} />
                  {isDark ? '[SEND_MESSAGE]' : 'Send Message'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
