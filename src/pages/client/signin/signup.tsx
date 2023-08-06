import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom"
import { signupApi } from "../../../api/auth";
import { useAddUserMutation } from "../../../services/user.service";
import { generateAccessToken } from "./auth.slice";
import { IUser } from "../../../models";

const Signin = () => {
    const { register, handleSubmit } = useForm();
    const [createFilm, { isSuccess }] = useAddUserMutation()
    const navigate = useNavigate()

    const onHandleSubmit = (data: any) => {
        const user: IUser = {
            email: data.email,
            password: data.password,
            role: 'member',
        };

        localStorage.setItem('user', JSON.stringify(user));

        // Tạo JWT token và thêm nó vào user object
        // const accessToken = generateAccessToken(user);
        // user.accessToken = accessToken;

        createFilm(user);
        navigate("/")
    };



    return (
        <div>
            <section className="relative flex flex-wrap lg:h-screen lg:items-center">
                <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                    <div className="mx-auto max-w-lg text-center">
                        <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>

                        <p className="mt-4 text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla
                            eaque error neque ipsa culpa autem, at itaque nostrum!
                        </p>
                    </div>

                    <form action="" className="mx-auto mb-0 mt-8 max-w-md space-y-4" onSubmit={handleSubmit(onHandleSubmit)}>
                        <div>
                            <label className="sr-only">Name</label>
                            <div className="relative">
                                <input
                                    {...register("name", { required: true })}
                                    type="text"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter name"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="sr-only">Email</label>
                            <div className="relative">
                                <input
                                    {...register("email", { required: true })}
                                    type="email"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter email"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="sr-only">Password</label>

                            <div className="relative">
                                <input
                                    {...register("password", { required: true })}
                                    type="password"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter password"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="sr-only">confirm Password</label>

                            <div className="relative">
                                <input
                                    {...register("confirm password", { required: true })}
                                    type="password"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter confirm password"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <p className="text-sm text-gray-500">
                                No account?
                                <Link to={'/signup'}>Sign up</Link>
                            </p>
                            <button
                                type="submit"
                                className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>

                <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
                    <img
                        alt="Welcome"
                        src="https://printgo.vn/uploads/media/792227/banner-quang-cao-tra-sua-4_1623309814.jpg"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </div>
            </section>
        </div>
    )
}

export default Signin
