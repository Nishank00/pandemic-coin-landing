import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "./Dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./Select";

const RegisterModal = () => {
  return (
    <Dialog>
      <DialogTrigger className="bg-[#BB1A37] text-white border-transparent font_cat font-bold  w-fit  rounded-[15px] px-4 py-2 ">
        Purchase
      </DialogTrigger>
      <DialogContent className="glassMorph max-h-[80vh] overflow-y-auto">
        <div className="mx-auto max-w-3xl space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Register</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Enter your information to register
            </p>
          </div>
          <div className="space-y-2">
            <label htmlFor="full-name">Full name</label>
            <input
              id="full-name"
              className="w-full activeHead border-b-[0.1px] skew-x-[-10deg] border-r-[0.1px] border-white bg-gray-300 text-white mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="age">Age</label>
            <input
              id="age"
              className="w-full activeHead border-b-[0.1px] skew-x-[-10deg] border-r-[0.1px] border-white bg-gray-300 text-white mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              placeholder="Enter your age"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="address">Address</label>
            <input
              id="address"
              className="w-full activeHead border-b-[0.1px] skew-x-[-10deg] border-r-[0.1px] border-white bg-gray-300 text-white mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              placeholder="Enter your address"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="country">Country</label>
            <input
              id="country"
              className="w-full activeHead border-b-[0.1px] skew-x-[-10deg] border-r-[0.1px] border-white bg-gray-300 text-white mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              placeholder="Enter your country"
              required
            />
          </div>{" "}
          <div className="space-y-2">
            <label htmlFor="wallet address">Wallet Address</label>
            <input
              id="wallet address"
              className="w-full activeHead border-b-[0.1px] skew-x-[-10deg] border-r-[0.1px] border-white bg-gray-300 text-white mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              placeholder="Enter your address"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="id-proof">ID type</label>
            <Select>
              <SelectTrigger className="w-full activeHead border-b-[0.1px] skew-x-[-10deg] border-r-[0.1px] border-white bg-gray-300 text-white mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline">
                <SelectValue placeholder="Select Id type" />
              </SelectTrigger>
              <SelectContent className="w-full activeHead border-b-[0.1px] border-r-[0.1px] border-white bg-gray-300 text-white mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline">
                <SelectItem value="cnic">Cnic</SelectItem>
                <SelectItem value="national id">Nationals Id</SelectItem>
                <SelectItem value="passport">Passport</SelectItem>
                <SelectItem value="driving license">Driving License</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label>Upload ID proof</label>
            <input
              className="w-full activeHead border-b-[0.1px] skew-x-[-10deg] border-r-[0.1px] border-white bg-gray-300 text-white mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              placeholder="Select file"
              required
              type="file"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="contact-number">Contact number</label>
            <input
              id="contact-number"
              className="w-full activeHead border-b-[0.1px] skew-x-[-10deg] border-r-[0.1px] border-white bg-gray-300 text-white mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              placeholder="Enter your contact number"
              required
            />
          </div>
          <div className="space-y-2">
            <input type="checkbox" id="terms" />
            <label
              className="text-sm font-medium leading-5 text-gray-500 sm:text-base dark:text-gray-400"
              htmlFor="terms"
            >
              {" "}
              I agree to the{" "}
              <a className="underline" href="#">
                terms and conditions{" "}
              </a>
            </label>
          </div>
          <button
            className="bg-[#BB1A37] text-white border-transparent font_cat font-bold  w-full  rounded-[15px] px-4 py-2 "
            type="submit"
          >
            Register
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterModal;
