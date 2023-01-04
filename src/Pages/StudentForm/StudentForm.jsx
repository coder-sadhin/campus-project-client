import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const StudentForm = () => {

    const {register, handleSubmit, formState: {errors}} = useForm();
    const [sex, setSex] = useState('');
    const [religion, setReligion] = useState('');

    const handleSave = data => {

        const image = data.image;
        const name = data.name;
        const roll = data.roll;
        const regi = data.regi;
        const department = data.department;
        const shift = data.shift;
        const mobile = data.mobile;
        const email = data.email;
        const birthday = data.date;
        const fatherName = data.fatherName;
        const fatherPhone = data.fatherPhone;
        const motherName = data.motherName;
        const motherPhone = data.motherPhone;
        const address = data.address;


        const studentInfo = {
            image,
            name,
            roll,
            regi,
            department,
            shift,
            mobile,
            email,
            birthday,
            fatherName,
            fatherPhone,
            motherName,
            motherPhone,
            address,
            sex,
            religion
        }
        

        console.log(studentInfo)
    }
    return (
        <div className='my-10'>
            <div className=" bg-base-200 py-14">
                <div className="hero-content flex-col">
                    <div className='text-center font-semibold'>
                        <h3 className='text-2xl'>রাজশাহী পলিটেকনিক ইনস্টিটিউট, রাজশাহী </h3>
                        <h1 className='text-3xl mt-6'>কম্পিউটার টেকনোলজি</h1>
                    </div>
                    <form onSubmit={handleSubmit(handleSave)} className="card w-full">
                        <h3 className='text-2xl font-semibold text-center my-8'>ছাত্র-ছাত্রী তথ্য</h3>
                        <h4 className="text-2xl text-center mb-2">ছবি</h4>
                            <div className='border-2 w-3/4 md:w-2/4 lg:w-1/4 mx-auto'>
                                <input className='py-8 px-5' type="file" {...register("image", { required: "ছবি বাধ্যতামূলক"})} id="" />
                                {errors.image && <p role="alert" className='text-red-600 text-center mb-2'>{errors.image?.message}</p>}
                            </div>
                        <div className="card-body grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">নাম (ইংরেজিতে)</span>
                                </label>
                                <input type="text" {...register("name", { required: "নাম বাধ্যতামূলক"})} placeholder="Your full name" className="bg-gray-100 input input-bordered" />
                                {errors.name && <p role="alert" className='text-red-600'>{errors.name?.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">রোল নম্বর (ইংরেজিতে)</span>
                                </label>
                                <input type="text" {...register("roll", { required: "রোল নম্বর বাধ্যতামূলক"})} placeholder="Your roll no" className="bg-gray-100 input input-bordered" />
                                {errors.roll && <p role="alert" className='text-red-600'>{errors.roll?.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">রেজি. নম্বর (ইংরেজিতে)</span>
                                </label>
                                <input type="text" {...register("regi", { required: "রেজি. নম্বর বাধ্যতামূলক"})} placeholder="Your registration no" className="bg-gray-100 input input-bordered" />
                                {errors.regi && <p role="alert" className='text-red-600'>{errors.regi?.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">বিভাগ (ইংরেজিতে)</span>
                                </label>
                                <input type="text" {...register("department", { required: "বিভাগ বাধ্যতামূলক"})} placeholder="Your Department" className="bg-gray-100 input input-bordered" />
                                {errors.department && <p role="alert" className='text-red-600'>{errors.department?.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">শিফট</span>
                                </label>
                                <input type="text" {...register("shift", { required: "শিফট বাধ্যতামূলক"})} placeholder="Your shift" className="bg-gray-100 input input-bordered" />
                                {errors.shift && <p role="alert" className='text-red-600'>{errors.shift?.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">মোবাইল নম্বর (ইংরেজিতে)</span>
                                </label>
                                <input type="text" {...register("mobile", { required: "মোবাইল নম্বর বাধ্যতামূলক"})} placeholder="Your mobile no" className="bg-gray-100 input input-bordered" />
                                {errors.mobile && <p role="alert" className='text-red-600'>{errors.mobile?.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">ই-মেইল (ইংরেজিতে)</span>
                                </label>
                                <input type="email" {...register("email", { required: "ই-মেইল বাধ্যতামূলক"})} placeholder="Your Email" className="bg-gray-100 input input-bordered" />
                                {errors.email && <p role="alert" className='text-red-600'>{errors.email?.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">জন্ম-তারিখ</span>
                                </label>
                                <input type="date" {...register("date", { required: "জন্ম-তারিখ বাধ্যতামূলক"})} placeholder="Your Birthday" className="bg-gray-100 input input-bordered" />
                                {errors.date && <p role="alert" className='text-red-600'>{errors.date?.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">লিঙ্গ</span>
                                </label>
                                <div className='flex justify-start items-center'>
                                    <p className='flex'>
                                        <label htmlFor='male' className="label">
                                            Male
                                        </label>
                                        <input onClick={() => setSex('male')} id='male' type="radio" name='sex' {...register("male")} className="bg-gray-100 border-none " />
                                    </p>
                                    <p className='flex'>
                                        <label htmlFor='female' className="label">
                                            Female
                                        </label>
                                        <input onClick={() => setSex('female')} id='female' type="radio" name='sex' {...register("male")} className="bg-gray-100 border-none " />
                                    </p>
                                    <p className='flex'>
                                        <label htmlFor='others' className="label">
                                            Others
                                        </label>
                                        <input onClick={() => setSex('others')} id='others' type="radio" name='sex' {...register("male")} className="bg-gray-100 border-none " />
                                    </p>
                                    
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">ধর্ম</span>
                                </label>
                                <div className='flex justify-start items-center'>
                                <p className='flex'>
                                        <label htmlFor='islam' className="label">
                                            Islam
                                        </label>
                                        <input onClick={() => setReligion('islam')} id='islam' type="radio" name='sex' {...register("male")} className="bg-gray-100 border-none " />
                                    </p>
                                    <p className='flex'>
                                        <label htmlFor='hindu' className="label">
                                            Hindu
                                        </label>
                                        <input onClick={() => setReligion('hindu')} id='hindu' type="radio" name='sex' {...register("male")} className="bg-gray-100 border-none " />
                                    </p>
                                    <p className='flex'>
                                        <label htmlFor='khristan' className="label">
                                            Khristan
                                        </label>
                                        <input onClick={() => setReligion('khristan')} id='others' type="radio" name='sex' {...register("male")} className="bg-gray-100 border-none " />
                                    </p>
                                    <p className='flex'>
                                        <label htmlFor='others' className="label">
                                            Others
                                        </label>
                                        <input onClick={() => setReligion('others')} id='others' type="radio" name='sex' {...register("male")} className="bg-gray-100 border-none " />
                                    </p>
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">পিতার নাম (ইংরেজিতে)</span>
                                </label>
                                <input type="text" {...register("fatherName", { required: "পিতার নাম বাধ্যতামূলক"})} placeholder="Your father's name" className="bg-gray-100 input input-bordered" />
                                {errors.fatherName && <p role="alert" className='text-red-600'>{errors.fatherName?.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">পিতার মোবাইল নম্বর (ইংরেজিতে)</span>
                                </label>
                                <input type="text" {...register("fatherPhone", { required: "মোবাইল নম্বর বাধ্যতামূলক"})} placeholder="Your father's mobile no" className="bg-gray-100 input input-bordered" />
                                {errors.fatherPhone && <p role="alert" className='text-red-600'>{errors.fatherPhone?.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">মাতার নাম (ইংরেজিতে)</span>
                                </label>
                                <input type="text" {...register("motherName", { required: "মাতার নাম বাধ্যতামূলক"})} placeholder="Your mother's name" className="bg-gray-100 input input-bordered" />
                                {errors.motherName && <p role="alert" className='text-red-600'>{errors.motherName?.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">মাতার মোবাইল নম্বর (ইংরেজিতে)</span>
                                </label>
                                <input type="text" {...register("motherPhone", { required: "মোবাইল নম্বর বাধ্যতামূলক"})} placeholder="Your mother's mobile no" className="bg-gray-100 input input-bordered" />
                                {errors.motherPhone && <p role="alert" className='text-red-600'>{errors.motherPhone?.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">স্থায়ী ঠিকানা (ইংরেজিতে)</span>
                                </label>
                                <input type="text" {...register("address", { required: "স্থায়ী ঠিকানা বাধ্যতামূলক"})} placeholder="Your permanent address" className="bg-gray-100 input input-bordered" />
                                {errors.address && <p role="alert" className='text-red-600'>{errors.address?.message}</p>}
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default StudentForm;