'use client';
import React from 'react'
import InputField from '../../common/InputField'
import { useForm } from 'react-hook-form';
import Button from '../../common/Button';

const PrivateSaleAgreement = () => {
    const {
        register,
        formState: {errors},
        watch,
        handleSubmit
    } = useForm();

    const onSubmit = (inpData:any) => {
        console.log("inpda ta ====>", inpData)
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-[800px] mx-auto my-[10px] rounded-[13px] backdrop-blur-[42px] bg-[#ffffff0a] p-[20px] flex flex-col gap-[15px]'>
        <h2 className='text-[20px] md:text-[30px]'>Token Sale Agreement</h2>
        <div className="agreement-scrollbar overflow-y-auto ">
            <h3>This is it</h3>
            <p className='rounded h-[200px]  w-full bg-transparent pb-[20px]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sit, quas maxime minima tempora laborum cum recusandae repellat est velit. Sed enim numquam consectetur temporibus alias minima corporis qui dolores labore adipisci laborum dolorem perspiciatis facilis beatae impedit vero at harum eos non cupiditate earum voluptates, possimus aliquam. Eius hic mollitia inventore aut sint iure! Obcaecati odio quisquam alias quis saepe quas numquam inventore tempora fugiat officiis perferendis, corporis quae quam mollitia illum, ipsum aliquam harum veniam blanditiis voluptatum. Illum, iusto? Culpa libero, atque eligendi quo modi ipsam delectus asperiores rerum fugit voluptatem sit, distinctio quae quas illum possimus quis reiciendis suscipit enim impedit assumenda, voluptates placeat autem fugiat. Mollitia modi ab repudiandae dignissimos, repellat quo. Possimus nobis qui nostrum! Omnis vero pariatur iste perspiciatis facilis. Harum nam, culpa corrupti aspernatur, veritatis, laboriosam velit hic eveniet ducimus fugiat exercitationem minus! Nemo, reiciendis architecto officia aperiam explicabo cumque hic veritatis qui possimus aut repellat asperiores corporis non quasi fugit laborum beatae voluptas, assumenda illum, harum quae! Rerum reiciendis perferendis unde et laborum cumque eos enim illo sequi sed. Soluta eveniet adipisci hic iste perferendis perspiciatis voluptate, excepturi officia necessitatibus. Blanditiis animi maiores voluptatum atque inventore architecto, rem, nobis explicabo doloribus odio aliquid perferendis unde fugiat dolorem non tempora veritatis, perspiciatis vero adipisci? Placeat, officiis mollitia quia dolores quod aspernatur ducimus rerum obcaecati sed a voluptates eligendi tenetur, rem facilis sit? Fugiat quia distinctio rem consequuntur rerum? Architecto fugiat quod qui nesciunt necessitatibus magnam cupiditate obcaecati, tenetur dolor saepe eius, commodi nihil sit, quidem quaerat sint. Qui, mollitia ipsam. Veniam facilis distinctio odit suscipit sed beatae voluptatem explicabo aperiam harum quasi ad rerum delectus culpa perferendis amet, a, temporibus nobis exercitationem enim architecto? Corrupti consequatur ipsa, minima quas deleniti veritatis aliquam quo. Quae tempora, unde voluptatum pariatur numquam quis, corporis omnis placeat quaerat alias excepturi expedita iste voluptatem eligendi aperiam! Dicta, accusantium nostrum. Libero quaerat est magnam. Fugit, rerum deleniti laudantium doloremque magnam nam quis nostrum suscipit ducimus. Quidem optio eaque possimus delectus accusamus commodi asperiores itaque molestias, dolorum odit velit dolor impedit? Consequuntur saepe natus nobis nulla, commodi dolorem ipsam consectetur iusto dolor deserunt nesciunt, hic blanditiis quia recusandae deleniti dicta amet temporibus magni, sequi doloribus quam maxime voluptates iure? Illo necessitatibus repellendus laborum tenetur reiciendis illum aperiam exercitationem porro asperiores repellat, incidunt iusto. Provident et, repellendus dignissimos fugit molestiae quos quia nisi vero nobis totam reiciendis cumque amet! Ipsa, earum.
            </p>
        </div>
        <div className="">
        <InputField 
            register={register}
            errors={errors}
            name='agree'
            type='checkbox'
            label='Agree on what we said?'
            classNames={{label: 'ml-3 font-extraLight'}}
        />
        <InputField 
            register={register}
            errors={errors}
            name='agree2'
            type='checkbox'
            label='Agree on what we said 2?'
            classNames={{label: 'ml-3 font-extraLight'}}
        />
        <InputField 
            register={register}
            errors={errors}
            name='agree3'
            type='checkbox'
            label='Agree on what we said 3?'
            classNames={{label: 'ml-3 font-extraLight'}}
        />
        </div>
        <Button 
            type='submit'
            label='Buy $PDC'
            className='w-fit'
        />
    </form>
  )
}

export default PrivateSaleAgreement