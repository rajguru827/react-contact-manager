function ContactForm() {
    return (
        <form>
            <div className="grid grid-cols-1 gap-6">
                <label className="block">
                    <span className="text-gray-700">First name</span>
                    <input type="text" name="firstName" className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black" />
                </label>
                <label className="block">
                    <span className="text-gray-700">Last name</span>
                    <input type="text" name="lastName" className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black" />
                </label>
                <label className="block">
                    <span className="text-gray-700">Company</span>
                    <input type="text" name="company" className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black" />
                </label>

                <label className="block">
                    <span className="text-gray-700">Mobile</span>
                    <input type="number" name="mobile" className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black" />
                </label>

                <label className="block">
                    <span className="text-gray-700">Email</span>
                    <input type="email" name="mobile" className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black" />
                </label>

                <label className="block">
                    <span className="text-gray-700">URL</span>
                    <input type="url" name="url" className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black" />
                </label>

                <label className="block">
                    <span className="text-gray-700">Address</span>
                    <textarea name="address" className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"></textarea>
                </label>

                <label className="block">
                    <span className="text-gray-700">Birthday</span>
                    <input type="date" name="dob" className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black" />
                </label>
            </div>

            <input type="submit" value="Submit" />
        </form>
    );
}

export default ContactForm