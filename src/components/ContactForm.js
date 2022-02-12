import React from "react"

class ContactForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <form>
                <div className="grid grid-cols-1 gap-6">
                    <label className="block">
                        <span className="text-gray-700">First name</span>
                        <input type="text" name="firstName" className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                            value={this.state.firstName} onChange={this.handleInputChange} required/>
                    </label>
                    <label className="block">
                        <span className="text-gray-700">Last name</span>
                        <input type="text" name="lastName" className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                            value={this.state.lastName} onChange={this.handleInputChange} />
                    </label>
                    <label className="block">
                        <span className="text-gray-700">Company</span>
                        <input type="text" name="company" className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                            value={this.state.company} onChange={this.handleInputChange} />
                    </label>

                    <label className="block">
                        <span className="text-gray-700">Mobile</span>
                        <input type="number" name="mobile" className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                            value={this.state.mobile} onChange={this.handleInputChange} />
                    </label>

                    <label className="block">
                        <span className="text-gray-700">Email</span>
                        <input type="email" name="email" className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                            value={this.state.email} onChange={this.handleInputChange} />
                    </label>

                    <label className="block">
                        <span className="text-gray-700">URL</span>
                        <input type="url" name="url" className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                            value={this.state.url} onChange={this.handleInputChange} />
                    </label>

                    <label className="block">
                        <span className="text-gray-700">Address</span>
                        <textarea name="address" className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                            value={this.state.address} onChange={this.handleInputChange}></textarea>
                    </label>

                    <label className="block">
                        <span className="text-gray-700">Birthday</span>
                        <input type="date" name="dob" className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                            value={this.state.dob} onChange={this.handleInputChange} />
                    </label>
                </div>

                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default ContactForm