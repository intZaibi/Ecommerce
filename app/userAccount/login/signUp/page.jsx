import React from 'react'

export default function SignUp() {
  return (
    <div class="flex flex-col justify-center font-[sans-serif] sm:h-screen p-4">
      <div class="max-w-md w-full mx-auto bg-white border border-gray-300 rounded-2xl p-8">

      <h2 class="text-gray-800 text-center mb-4 text-2xl font-bold">Sign up</h2>
        
        <form>
          <div class="space-y-6">
            <div>
              <label class="text-gray-800 text-sm mb-2 block">Email Id</label>
              <input name="email" type="text" class="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-[#00cc88]" placeholder="Enter email" />
            </div>
            <div>
              <label class="text-gray-800 text-sm mb-2 block">Password</label>
              <input name="password" type="password" class="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-[#00cc88]" placeholder="Enter password" />
            </div>
            <div>
              <label class="text-gray-800 text-sm mb-2 block">Confirm Password</label>
              <input name="cpassword" type="password" class="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-[#00cc88]" placeholder="Enter confirm password" />
            </div>

            <div class="flex items-center hidden">
              <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 shrink-0 text-[#00cc88] focus:ring-[#00cc88] border-gray-300 rounded" />
              <label for="remember-me" class="text-gray-800 ml-3 block text-sm">
                I accept the <a href="javascript:void(0);" class="text-[#00cc88] font-semibold hover:underline ml-1">Terms and Conditions</a>
              </label>
            </div>
          </div>

          <div class="!mt-12">
            <button type="button" class="w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-[#00cc88] hover:bg-[#00cc88cf] focus:outline-none">
              Create an account
            </button>
          </div>
          <p class="text-gray-800 text-sm mt-6 text-center">Already have an account? <a href="signIn" class="text-[#00cc88] font-semibold hover:underline ml-1">Login here</a></p>
        </form>
      </div>
    </div>
  )
}
