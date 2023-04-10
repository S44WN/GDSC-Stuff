/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { UserCircleIcon } from "@heroicons/react/24/solid";

export default function Profile() {
  return (
    <div className="my-6 bg-blue overflow-hidden sm:rounded-lg">
      <div className="p-6">
        <form>
          <div className="space-y-12 ">
            <div className="mx-auto sm:max-w-7xl ">
              <div className="max-w-7xl border-b border-gray-900/10 pb-12 sm:flex sm:place-content-around sm:gap-12">
                <div className="mt-2 flex flex-col items-center gap-x-3  pr-8 border-r border-gray-900/10">
                  <h2 className="text-base pb-3 font-semibold leading-7 text-gray-900">
                    Profile
                  </h2>
                  <UserCircleIcon
                    className="h-36 w-36 text-gray-300 "
                    aria-hidden="true"
                  />
                  <h2 className="block text-sm pb-4 font-medium leading-6 text-gray-900">
                    Anmol Lame
                  </h2>
                  <button
                    type="button"
                    className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                    Change
                  </button>

                  <div className="sm:col-span-3 pt-4">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Gender
                    </label>
                    <div className="mt-2">
                      <select
                        id="gender"
                        name="gender"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      >
                        <option>Male</option>
                        <option>Female</option>
                        <option>Others</option>
                      </select>
                    </div>
                    <div className="col-span-full pt-4">
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Bio
                      </label>
                      <div className="mt-2">
                        <textarea
                          id="about"
                          name="about"
                          rows={3}
                          className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                          defaultValue={""}
                        />
                      </div>
                      <p className="mt-3 text-sm leading-6 text-gray-600">
                        C'mon Let us know what you are made of.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="sm:w-1/3">
                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-full">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Name
                      </label>
                      <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                          <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm"></span>
                          <input
                            type="text"
                            name="username"
                            id="username"
                            autoComplete="username"
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="Yo Dawg"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="sm:col-span-full">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Email
                      </label>
                      <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                          <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm"></span>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            autoComplete="email"
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="yodawg@gmail.com"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="sm:col-span-full">
                      <label
                        htmlFor="registration-number"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Registration Number
                      </label>
                      <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                          <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm"></span>
                          <input
                            type="text"
                            name="registration-number"
                            id="registration-number"
                            autoComplete="registration-number"
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="12208558"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="sm:col-span-full">
                      <label
                        htmlFor="university-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        University Name
                      </label>
                      <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                          <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm"></span>
                          <input
                            type="text"
                            name="university-name"
                            id="university-name"
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="Lovely Professional University"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="sm:col-span-full">
                      <label
                        htmlFor="phone-no"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Phone No.
                      </label>
                      <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                          <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm"></span>
                          <input
                            type="text"
                            name="phone-no"
                            id="phone-no"
                            autoComplete="phone-no"
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="6686513184"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sm:w-1/3">
                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-6">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Github Username
                      </label>
                      <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                          <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm"></span>
                          <input
                            type="text"
                            name="github-username"
                            id="github-username"
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="github.com/YoDawg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="sm:col-span-6">
                      <label
                        htmlFor="linkedin-username"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Twitter
                      </label>
                      <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                          <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm"></span>
                          <input
                            type="text"
                            name="twitter-username"
                            id="twitter-username"
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="twitter.com/YoDawg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="sm:col-span-6">
                      <label
                        htmlFor="linkedin-username"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        LinkedIn
                      </label>
                      <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                          <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm"></span>
                          <input
                            type="text"
                            name="linkedin-username"
                            id="linkedin-username"
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="linkedin.com/YoDawg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                  type="button"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-orange-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
