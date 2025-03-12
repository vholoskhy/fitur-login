import FormRegister from "@/components/auth/form-register";

const Register = () => {
  return (
    <div className="p-6 space-y-4 bg-gray-400 rounded-[30px]">
      <h1 className="text-2xl font-bold text-violet-6 ">Create an Account</h1>
      <FormRegister />
    </div>
  );
};

export default Register;
