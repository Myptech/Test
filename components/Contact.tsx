import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaMap, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "") {
      setErrMsg("Напишите имя");
    } else if (email === "") {
      setErrMsg("Напишите вашу почту ");
    } else if (message === "") {
      setErrMsg("Напишите ваше сообщение");
    } else {
      setSuccessMsg(
        `Здравствуйте ${username}, Спасибо за ваше сообщение. Ответ придет на вашу почту ${email}`
      );
      setErrMsg("");  // Очистить ошибку после успешной отправки
    }
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen bg-[#0A0D0F] text-white flex justify-center items-center" // Используем Flex для центрирования
    >
      <div className="w-full max-w-screen-xl h-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Левая половина — форма и контактная информация */}
        <div className="flex flex-col justify-center items-center bg-[#1C2125] p-6 rounded-lg shadow-xl">
          {/* Заголовок с анимацией */}
          <motion.h1
            className="text-3xl font-bold text-center text-[#F7D449] mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Свяжитесь с нами
          </motion.h1>

          {/* Контактная информация */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              className="flex flex-col items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <FaMap className="text-6xl text-[#F7D449] hover:scale-110 transition-all duration-300" />
              <p className="text-xl font-semibold mt-2">Москва</p>
            </motion.div>

            <motion.div
              className="flex flex-col items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <FaPhoneAlt className="text-6xl text-[#F7D449] hover:scale-110 transition-all duration-300" />
              <p className="text-xl font-semibold mt-2">+7081303858</p>
            </motion.div>

            <motion.div
              className="flex flex-col items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <FaEnvelope className="text-6xl text-[#F7D449] hover:scale-110 transition-all duration-300" />
              <p className="text-xl font-semibold mt-2">Porfolio_maker
                @support.com</p>
            </motion.div>
          </div>

          {/* Форма */}
          {successMsg ? (
            <motion.p
              className="max-w-[600px] mx-auto text-xl font-semibold text-center text-[#F7D449]"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, type: "easeIn" }}
            >
              {successMsg}
            </motion.p>
          ) : (
            <form
              className="w-full flex flex-col items-center gap-8 md:gap-10 mt-10"
              onSubmit={handleSubmit}
            >
              <div className="w-full flex flex-col md:flex-row gap-6 md:gap-12">
                <motion.input
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  className="w-full md:w-1/2 py-4 px-6 text-lg text-black placeholder-gray-400 font-semibold placeholder-font-normal outline-none border-2 border-transparent focus:ring-2 focus:ring-[#F7D449] focus:ring-opacity-60 rounded-lg transition-all duration-300 transform hover:scale-105"
                  type="text"
                  placeholder="Ваше имя"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
                <motion.input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="w-full md:w-1/2 py-4 px-6 text-lg text-black placeholder-gray-400 font-semibold placeholder-font-normal outline-none border-2 border-transparent focus:ring-2 focus:ring-[#F7D449] focus:ring-opacity-60 rounded-lg transition-all duration-300 transform hover:scale-105"
                  type="email"
                  placeholder="Ваш email"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                />
              </div>

              <motion.textarea
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                placeholder="Ваше сообщение"
                className="w-full text-lg h-36 p-6 text-black placeholder-gray-400 font-semibold placeholder-font-normal outline-none border-2 border-transparent focus:ring-2 focus:ring-[#F7D449] focus:ring-opacity-60 rounded-lg transition-all duration-300 transform hover:scale-105 resize-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              ></motion.textarea>

              {errMsg && (
                <motion.p
                  className="w-full bg-red-500 py-2 text-center text-base font-semibold tracking-wider rounded-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  {errMsg}
                </motion.p>
              )}

              <motion.button
                type="submit"
                className="w-48 h-14 bg-[#F7D449] text-lg uppercase font-bold tracking-wide border-2 border-transparent hover:bg-[#F7C039] transform hover:scale-105 rounded-lg transition-all duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                Отправить
              </motion.button>
            </form>
          )}
        </div>

        {/* Правая половина — изображение */}
        <div className="hidden md:block relative w-full h-full">
          <img
            src="/assets/contact.jpg"  // Замените на ваше изображение
            alt="Contact"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
