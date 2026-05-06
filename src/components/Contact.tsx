import {
  FaWhatsapp,
  FaPhone,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#030712]">
      <div className="container mx-auto px-6">

        <h2 className="text-4xl font-bold text-white mb-12">
          Contact <span className="text-blue-500">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {/* Email */}
          <a
            href="mailto:Muhammedhhamdhan985@icloud.com"
            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/40 transition flex items-center gap-4"
          >
            <MdEmail className="text-blue-400 text-3xl" />
            <div>
              <h3 className="text-white font-bold">Email</h3>
              <p className="text-gray-400">
                Muhammedhhamdhan985@icloud.com
              </p>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/94772994015"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-green-500/40 transition flex items-center gap-4"
          >
            <FaWhatsapp className="text-green-400 text-3xl" />
            <div>
              <h3 className="text-white font-bold">WhatsApp</h3>
              <p className="text-gray-400">
                +94 77 299 4015
              </p>
            </div>
          </a>

          {/* Call */}
          <a
            href="tel:+94772994015"
            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/40 transition flex items-center gap-4"
          >
            <FaPhone className="text-purple-400 text-3xl" />
            <div>
              <h3 className="text-white font-bold">Call</h3>
              <p className="text-gray-400">
                +94 77 299 4015
              </p>
            </div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Hamdhan-10"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-gray-500/40 transition flex items-center gap-4"
          >
            <FaGithub className="text-white text-3xl" />
            <div>
              <h3 className="text-white font-bold">GitHub</h3>
              <p className="text-gray-400">
                github.com/Hamdhan-10
              </p>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/muhammedh-hamdhan-811416322"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/40 transition flex items-center gap-4"
          >
            <FaLinkedin className="text-blue-500 text-3xl" />
            <div>
              <h3 className="text-white font-bold">LinkedIn</h3>
              <p className="text-gray-400">
                Muhammedh Hamdhan
              </p>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
}