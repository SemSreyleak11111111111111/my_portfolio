import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaTelegramPlane,
  FaPinterestP,
  FaTiktok,
  FaGithub,
} from "react-icons/fa";

const contacts = [
  {
    name: "Email",
    value: "Kanhaleak777@gmail.com",
    icon: <FaEnvelope />,
    link: "mailto:Kanhaleak777@gmail.com",
  },
  {
    name: "Phone",
    value: "+855 16 812 620",
    icon: <FaPhoneAlt />,
    link: "tel:+85516812620",
  },
  {
    name: "Telegram",
    value: "@cattttt_2711",
    icon: <FaTelegramPlane />,
    link: "https://t.me/cattttt_2711",
  },
  {
    name: "TikTok",
    value: "@cattttttttt67",
    icon: <FaTiktok />,
    link: "https://www.tiktok.com/@cattttttttt67",
  },
  {
    name: "Pinterest",
    value: "pin.it/6iZLsNEmD",
    icon: <FaPinterestP />,
    link: "https://pin.it/6iZLsNEmD",
  },
  {
  name: "GitHub",
  value: "SemSreyleak11111111111111",
  icon: <FaGithub />,
  link: "https://github.com/SemSreyleak11111111111111",
},
  
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-black text-white py-24"
    >
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .5 }}
        >
          <h2 className="text-5xl font-bold mb-4">
            Contact
          </h2>

          <p className="text-gray-400 mb-14 text-lg">
            Feel free to contact me for freelance work,
            collaborations, or full-time opportunities.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {contacts.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.08,
                }}
                whileHover={{
                  scale: 1.03,
                  y: -5,
                }}
                className="flex items-center gap-5 rounded-2xl border border-zinc-800 bg-zinc-900 p-6 hover:border-white transition"
              >
                <div className="text-3xl">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-lg font-semibold">
                    {item.name}
                  </h3>

                  <p className="text-gray-400">
                    {item.value}
                  </p>
                </div>

              </motion.a>
              
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Contact;