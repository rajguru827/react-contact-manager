function ContactForm() {
    return (
        <form>
            <div className="grid grid-cols-1 gap-6">
                <label className="block">
                    <span className="text-gray-700">First name</span>
                    <input type="text" name="firstName" className="block w-full mt-1" />
                </label>
                <label class="block">
                    <span className="text-gray-700">Last name</span>
                    <input type="text" name="lastName" className="block w-full mt-1" />
                </label>
                <label class="block">
                    <span className="text-gray-700">Company</span>
                    <input type="text" name="company" className="block w-full mt-1" />
                </label>

                <label class="block">
                    <span className="text-gray-700">Mobile</span>
                    <input type="number" name="mobile" className="block w-full mt-1" />
                </label>

                <label class="block">
                    <span className="text-gray-700">Email</span>
                    <input type="email" name="mobile" className="block w-full mt-1" />
                </label>

                <label class="block">
                    <span className="text-gray-700">URL</span>
                    <input type="url" name="url" className="block w-full mt-1" />
                </label>

                <label class="block">
                    <span className="text-gray-700">Address</span>
                    <textarea  name="address" className="block w-full mt-1"></textarea>
                </label>

                <label class="block">
                    <span className="text-gray-700">Birthday</span>
                    <input type="date" name="dob" className="block w-full mt-1" />
                </label>
            </div>

            <input type="submit" value="Submit" />
        </form>
    );
}

export default ContactForm