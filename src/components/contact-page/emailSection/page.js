"use client"
import Image from "next/image";
import img from '../../../../public/images/email.svg'
import contactImg from '../../../../public/images/contact_img.png'
import Script from "next/script";
import emailjs from "../emailJsFile/page";
import { useRef } from "react";
import { FaVoicemail } from "react-icons/fa6";
import { FaFacebook, FaLinkedin, FaLocationArrow, FaPhone, FaTwitter } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import Link from "next/link";
const Swal = require('sweetalert2')

const EmailSection = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();
    const target = e.target
    let name = target.user_name.value
    let email = target.user_email.value
    let message = target.message.value
    const rules = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/"
    
    if (name === '' || email === ''  || message === '') {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "input box is empty !",
        showConfirmButton: false,
        timer: 2500
      })
    }
    else {
      emailjs.sendForm('service_so3nrs7', 'template_a94lqzf', form.current, 'GzJCnzv2qNGyYuwaT')
        .then((result) => {
          target.user_name.value = ''
          target.user_email.value = ''
          target.message.value = ''
          console.log(result.text);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully email send",
            showConfirmButton: false,
            timer: 2500
          })
        }, (error) => {
          console.log(error.text);
        });
    };
  }


  return (
    <div className="mx-5 lg:mx-24 dark:text-white">

      <Script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></Script>

      <div className="my-8  md:flex justify-between">

        <div className="">
          <div className="my-6 space-y-3">
            <h3 className="text-2xl font-medium">Contact Us</h3>
            <h2 className="text-4xl font-bold">Lets Talk Question.</h2>
            <p className="font-medium pt-4">The domestic dog is a doiated dendant of the wolf. The dog derived <br /> from an ancient, extinct wolf, and the modern grey.</p>
          </div>
          {/* Right Side  */}
          <div className="">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <label className="form-control">
                <span className="label-text-alt font-medium text-base">Your Name</span>
                <input type="text" name='user_name' required placeholder="Your Name" className="p-1 border-2 rounded-md" />
              </label>

              <label className="form-control">
                <span className="label-text-alt font-medium text-base">Your Email</span>
                <input type="email" name='user_email' required placeholder="Your Email" className="p-1 border-2 rounded-md" />
              </label>

              <label className="form-control">
                <span className="label-text-alt font-medium text-base">Your Message</span>
                <textarea className="textarea textarea-error" type='text' name='message' placeholder="Opinion....."></textarea>
              </label>

              <button className="btn bg-[#F04336] text-white font-medium hover:bg-black">Send Now</button>

            </form>
          </div>

        </div>

        {/* Left Side  */}
        <div className="p-10 mt-10">
          <Image width={200} height={200} src={contactImg} alt="" className="w-56" />
          <div className="my-8">
            <div className="space-y-7">

              <p className="flex items-center gap-4"> <FaLocationArrow className="text-[#F04336] w-9" /> Jashore, Khulna, Bangladesh,</p>
              <p className="flex items-center gap-4"><FaPhone className="text-[#F04336] w-9" /> +9 (256) 254 9568</p>
              <p className="flex items-center gap-4"> <HiOutlineMailOpen className="text-[#F04336] w-9" /> Contact@ info.com</p>
            </div>
          </div>
          {/* Social Link  */}
          <div className="flex gap-8 ">

            <Link href='https://www.facebook.com/SabbirOfficial34'>
              <FaFacebook className="text-blue-500 hover:cursor-pointer w-8 h-8" />
            </Link>

            <Link href='https://twitter.com/sk_sabbir34'>
              <FaTwitter className="text-sky-400 hover:cursor-pointer w-8 h-8" />
            </Link>

            <Link href='#'>
              <FaLinkedin className="text-blue-600 hover:cursor-pointer w-8 h-8" />
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
};

export default EmailSection;