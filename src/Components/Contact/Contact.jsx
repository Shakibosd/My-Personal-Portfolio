import { FaEnvelope } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch(`https://flower-seal-backend.vercel.app/flowers/contact/`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const contentType = res.headers.get("content-type");
            if (!contentType || !contentType.includes("application/json")) {
                throw new Error("Server did not return JSON. Possible error page.");
            }

            const data = res.ok ? await res.json() : null;

            if (res.ok) {
                alert("Your Message Has Been Sent Successfully!");
                setFormData({ name: "", email: "", message: "" });
            } else {
                alert("Failed To Send Your Message: " + JSON.stringify(data));
            }
        } catch (err) {
            console.error("Error:", err);
            alert("An error occurred while sending your message.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div id="contact" className="w-full px-4">
            <h1 className="text-2xl md:text-4xl text-white font-bold text-center mb-6">Contact Me</h1>
            <div className="text-white flex flex-col md:flex-row max-w-[1144px] mx-auto items-center sm:p-10">

                <div className="w-full md:w-[50%] flex flex-col font-bold text-center sm:text-left gap-4 sm:gap-6">
                    <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start">
                        <FiPhone className="text-blue-400 text-lg sm:text-xl font-bold" size={25} />
                        <h1 className="text-base sm:text-lg md:text-xl">+8801401997130</h1>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start">
                        <FaEnvelope className="text-red-400 text-lg sm:text-xl font-bold" size={25} />
                        <h1 className="text-base sm:text-lg md:text-xl">syednazmusshakib94@gmail.com</h1>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start">
                        <MdLocationOn className="text-green-400 text-lg sm:text-xl font-bold" size={30} />
                        <a target="_blank" rel="noopener noreferrer" href="https://shorturl.at/VP1g9">
                            <h1 className="text-base sm:text-lg md:text-xl underline">Shayestaganj, Habiganj, Sylhet, Bangladesh</h1>
                        </a>
                    </div>
                </div>

                <div className="w-full md:w-[50%] flex flex-col bg-gray-900 p-6 rounded-lg shadow-lg">
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                        <input id="name" className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg sm:text-xl" type="text" placeholder="Enter Your Name" name="name" value={formData.name} onChange={handleChange} />

                        <input id="email" className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg sm:text-xl" type="email" placeholder="Enter Your Email" name="email" value={formData.email} onChange={handleChange} />

                        <textarea id="message" className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg sm:text-xl" name="message" cols="30" rows="5" placeholder="Your Message Here" value={formData.message} onChange={handleChange}></textarea>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button type="submit" className="w-full sm:w-[48%] bg-[#465697] text-white py-2 px-4 rounded-lg hover:opacity-85 hover:scale-105 transition-all text-lg" disabled={loading}>{loading ? "Sending..." : "SEND"}</button>

                            <button type="reset" className="w-full sm:w-[48%] bg-gray-600 text-white py-2 px-4 rounded-lg hover:opacity-85 hover:scale-105 transition-all text-lg" onClick={() => setFormData({ name: "", email: "", message: "" })}>RESET</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Contact;
