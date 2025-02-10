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

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch(`https://flower-seal-backend.vercel.app/flowers/contact/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            // Check for HTML response (error page)
            const contentType = res.headers.get("content-type");
            if (!contentType || !contentType.includes("application/json")) {
                throw new Error("Server did not return JSON. Possible error page.");
            }

            const data = await res.json();
            if (res.ok) {
                alert("Your Message Has Been Sent Successfully!");
                setFormData({ name: "", email: "", message: "" });
            } else {
                alert("Failed To Send Your Message: " + JSON.stringify(data));
            }
        } catch (err) {
            console.log("Error:", err);
            alert("An error occurred while sending your message.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div id="contact" className="w-full">
            <h1 className="text-2xl md:text-4xl text-white font-bold text-center">Contact Me</h1>
            <div className="text-white flex flex-col md:flex-row max-w-[1144px] mx-auto items-center p-10">

                {/* Contact Information */}
                <div className="w-[50%] flex flex-col md:flex-col font-bold">
                    <div className="flex items-center mb-5 gap-2">
                        <FiPhone className="text-blue-400 text-xl font-bold" size={50} />
                        <h1 className="text-xl">+8801401997130</h1>
                    </div>

                    <div className="flex items-center mb-5 gap-2">
                        <FaEnvelope className="text-red-400 text-xl font-bold" size={50} />
                        <h1 className="text-xl">syednazmusshakib94@gmail.com</h1>
                    </div>

                    <div className="flex items-center">
                        <MdLocationOn className="text-green-400 text-xl font-bold" size={55} />
                        <a target="_blank" href="https://shorturl.at/VP1g9"><h1 className="text-xl underline">Shayestaganj, Habiganj, Sylhet, Bangladesh</h1></a>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="w-full md:w-[50%] flex flex-col bg-gray-900 p-6 rounded-lg shadow-lg">
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                        <input id="name" className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Enter Your Name" name="name" value={formData.name} onChange={handleChange} />

                        <input id="email" className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="email" placeholder="Enter Your Email" name="email" value={formData.email} onChange={handleChange} />

                        <textarea id="message" className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" name="message" cols="30" rows="5" placeholder="Your Message Here" value={formData.message} onChange={handleChange}></textarea>
                        {/* Buttons */}
                        <div className="flex justify-between">
                            <button type="submit" className="w-[48%] bg-[#465697] text-white py-2 px-4 rounded-lg font-hover:opacity-85 hover:scale-105 transition-all" disabled={loading}>
                                {loading ? "Sending..." : "SEND"}</button>

                            <button type="reset" className="w-[48%] bg-gray-600 text-white py-2 px-4 rounded-lg font-hover:opacity-85 hover:scale-105 transition-all" onClick={() => setFormData({ name: "", email: "", message: "" })}>RESET</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Contact;