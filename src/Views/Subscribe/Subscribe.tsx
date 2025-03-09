import { useState } from 'react'
import axios from 'axios'
import { useForm, SubmitHandler } from 'react-hook-form'

import accident_img from '../../assets/image_7.png'

type Inputs = {
  name: string
  company: string
  phone: string
  email: string
  message?: string
}

const Subscribe = () => {
  const { register, handleSubmit, reset } = useForm<Inputs>()

  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setLoading(true)
    axios
      .post('https://getform.io/f/avrwyjoa', data, {
        headers: { Accept: 'application/json' },
      })
      .then((response) => {
        console.log(response)
        setLoading(false)
        setSent(true)
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
      })
    reset()
  }

  return (
    <div className="bg-[#87BF74] items-center m-auto p-25 space-y-35 pl-50 pr-50 max-xl:pl-20 max-xl:pr-20 max-md:pl-10 max-md:pr-10 max-sm:pl-5 max-sm:pr-5">
      <div className="flex flex-row justify-evenly gap-30 max-lg:gap-0">
        <div className="flex flex-col justify-center">
          <p className="text-5xl/snug text-gray-700 font-black max-w-150 w-full max-xl:leading-10 max-xl:text-2xl max-xl:max-w-110 max-md:max-w-90">
            Entre em contato e vamos resolver junto as dores da sua
            empresa.{' '}
          </p>
          <p className="mt-5 text-xl/snug text-white font-black max-w-150 w-full max-xl:leading-8 max-xl:text-lg max-xl:max-w-110">
            Sua solução em sistema de visão, customizada e feita sob medida esta
            aqui!
          </p>
        </div>
        <img
          src={accident_img}
          alt="accident_img"
          className="w-120 h-120  max-2xl:w-100 max-2xl:h-100  max-xl:w-90 max-xl:h-90  max-lg:w-70 max-lg:h-70 max-md:hidden"
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="hidden" name="_gotcha" className="hidden" />

        <div className="space-y-12 bg-white shadow-[0px_-0px_10px_rgba(0,0,0,0.3)] p-20 rounded-md  max-sm:p-7">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base/7 font-semibold text-gray-900 max-md:text-md">
              Nos de a oportunidade de entender seu problema e mostrar todas as
              possibilidades de a olhAI tem a oferecer.
            </h2>
            <p className="mt-1 text-sm/6 text-gray-600 max-md:text-2sm">
              Informe os seus dados de contato para que possamos conversar.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="name"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Nome <span className="text-rose-800">*</span>
                </label>
                <div className="mt-2">
                  <input
                    {...register('name')}
                    required
                    type="text"
                    autoComplete="name"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#87BF74] autofill-white sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="company"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Empresa <span className="text-rose-800">*</span>
                </label>
                <div className="mt-2">
                  <input
                    {...register('company')}
                    required
                    type="text"
                    autoComplete="family-name"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#87BF74] autofill-white sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="email"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Email <span className="text-rose-800">*</span>
                </label>
                <div className="mt-2">
                  <input
                    {...register('email')}
                    required
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#87BF74] autofill-white sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="phone"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Telefone <span className="text-rose-800">*</span>
                </label>
                <div className="mt-2 grid grid-cols-1">
                  <input
                    {...register('phone')}
                    required
                    type="tel"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#87BF74] autofill-white sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="message"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Mensagem
                </label>
                <div className="mt-2">
                  <textarea
                    {...register('message')}
                    rows={3}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#87BF74] autofill-white sm:text-sm/6"
                    defaultValue={''}
                  />
                </div>
                <p className="mt-3 text-sm/6 text-gray-600">
                  Conte um pouco sobre quais são os desafios.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            {sent ? <span className="text-black">Enviado</span> : <></>}
            <button
              type="submit"
              disabled={sent || loading}
              className="cursor-pointer rounded-md bg-[#87BF74] px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-[#87BF7477] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg-[#87BF7477] active:bg-[#87BF74E0] active:translate-y-[2px] disabled:bg-[#aab4a7e0] disabled:active:bg-[#aab4a7e0]"
            >
              {loading ? 'Enviando' : 'Enviar'}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Subscribe
