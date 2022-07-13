import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { Star } from 'phosphor-react'
import Slider from 'react-slick'

const Home: NextPage = () => {
  const router = useRouter()

  const settingsFirst = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  }

  const settingsSecond = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  }

  return (
    <>
      <Head>
        <title>Blaze Na Alta</title>
      </Head>
      <header>
        <nav className="flex items-center justify-center p-10">
          <svg
            width="225"
            height="98"
            viewBox="0 0 225 98"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M30.418 8.74131C19.5749 24.3634 3.43155 48.7695 1.61497 52.2859C-0.670595 56.7116 -0.516995 63.3267 1.9918 68.5091C3.17248 70.9483 8.99802 77.59 15.5598 83.9777C34.6083 102.521 40.3764 102.405 60.0106 83.0837C71.0002 72.2682 74.6589 66.6966 74.6958 60.7175C74.7163 57.4653 62.5112 21.9274 61.3623 21.8925C61.0807 21.8833 59.5406 23.9498 57.9401 26.4831C56.3396 29.0165 54.8814 31.0891 54.6981 31.0891C54.5158 31.0891 50.8356 24.2928 46.5204 15.9851C42.2053 7.67737 38.3069 0.501177 37.8595 0.0373049C37.4109 -0.426567 34.0625 3.49023 30.418 8.74131ZM53.3792 44.1922C69.7622 60.5752 69.7929 60.0458 51.4285 77.5193C42.8566 85.6765 39.2828 88.4331 37.284 88.4331C35.3681 88.4331 32.2305 86.2202 26.2258 80.6353C11.4187 66.8615 9.1383 64.1029 9.1383 59.9649C9.1383 56.6143 10.2596 55.15 21.2174 44.1922C32.5193 32.8903 33.5535 32.1131 37.2983 32.1131C41.0431 32.1131 42.0773 32.8903 53.3792 44.1922ZM33.7143 43.3771C31.1635 45.9279 31.099 48.6906 33.5392 50.8984C35.9958 53.1215 39.1282 53.0488 41.2356 50.7202C43.5959 48.1131 43.3491 44.8107 40.654 42.9235C37.6465 40.8161 36.1791 40.9123 33.7143 43.3771ZM19.8289 57.1509C17.7901 60.2629 18.6932 63.5888 21.9854 65.089C27.257 67.4902 32.1179 60.3581 28.0096 56.2498C25.5899 53.8311 21.7253 54.2571 19.8289 57.1509ZM46.5317 56.3061C44.0669 58.7709 44.9752 62.999 48.3657 64.8483C51.1203 66.3505 51.3455 66.2983 53.7048 63.5878C56.2925 60.6141 56.1788 58.2056 53.3434 55.9211C51.1663 54.167 48.5213 54.3165 46.5317 56.3061ZM35.025 68.0422C31.8803 69.2126 30.9147 73.6168 33.2392 76.186C35.5831 78.7757 39.0412 78.745 41.422 76.1144C45.1247 72.0225 40.3877 66.0454 35.025 68.0422Z"
              fill="#FF0C36"
            />
            <path
              d="M90.5116 14.232H95.3901C98.5941 14.232 101.21 14.9323 103.239 16.3331C105.268 17.7177 106.282 19.4727 106.282 21.5979C106.282 24.1901 104.785 26.3556 101.79 28.0945C106.427 29.6401 108.745 32.3209 108.745 36.1367C108.745 38.7933 107.546 40.9346 105.147 42.5608C102.764 44.1869 99.5681 45 95.5591 45H90.5116V14.232ZM94.6655 17.9512V27.056C96.984 27.0238 98.7551 26.581 99.9787 25.7277C101.218 24.8744 101.838 23.699 101.838 22.2017C101.838 20.8976 101.283 19.8591 100.172 19.0863C99.061 18.2973 97.5717 17.9029 95.704 17.9029C95.3015 17.9029 94.9554 17.919 94.6655 17.9512ZM94.6655 30.7028V41.2325H95.0037C98.6263 41.2325 101.098 40.6529 102.418 39.4936C103.738 38.3344 104.398 37.151 104.398 35.9435C104.398 34.3495 103.658 33.0776 102.176 32.1277C100.695 31.1777 98.6665 30.7028 96.0904 30.7028H94.6655ZM119.693 14.232H123.847V40.8461H133.87V45H119.693V14.232ZM154.044 22.6847L144.021 45H139.65L154.044 13.0486L168.582 45H164.187L154.044 22.6847ZM176.028 14.232H196.798L182.114 40.8461H196.508V45H175.304L189.891 18.4342H176.028V14.232ZM205.766 14.232H222.816V18.4342H209.92V26.1141H222.816V30.268H209.92V40.8461H222.816V45H205.766V14.232Z"
              fill="#FF0C36"
            />
            <path
              d="M105.692 81.437H103.501L91.3901 63.0353V81.437H89.1994V59.5615H91.3901L103.501 77.9319V59.5615H105.692V81.437ZM126.145 76.242H116.193L114.284 81.437H111.968L119.949 59.8432H122.421L130.37 81.437H128.054L126.145 76.242ZM125.488 74.4268L121.169 62.5972L116.85 74.4268H125.488ZM160.782 76.242H150.83L148.921 81.437H146.605L154.585 59.8432H157.057L165.006 81.437H162.691L160.782 76.242ZM160.124 74.4268L155.806 62.5972L151.487 74.4268H160.124ZM173.53 79.6532H181.385V81.437H171.339V59.5615H173.53V79.6532ZM200.128 59.5615V61.3766H194.056V81.437H191.866V61.3766H185.763V59.5615H200.128ZM219.078 76.242H209.126L207.217 81.437H204.901L212.881 59.8432H215.354L223.303 81.437H220.987L219.078 76.242ZM218.421 74.4268L214.102 62.5972L209.783 74.4268H218.421Z"
              fill="white"
            />
          </svg>
        </nav>
        <div className="container px-5 mx-auto w-full flex items-center justify-center">
          <iframe
            src="https://www.youtube.com/embed/sSkJTRYcIPE"
            title="YouTube video player"
            frameBorder="0"
            className="w-full max-w-[1013px] aspect-video rounded-lg overflow-hidden"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </header>
      <main>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="relative"
        >
          <path
            fill="#111111"
            fillOpacity="1"
            d="M0,96L1440,256L1440,320L0,320Z"
          ></path>
        </svg>
        <div className="bg-gray-800 pb-[100px]">
          <section>
            <div className="container mx-auto px-5">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="bg-gray-700 p-7 rounded-lg">
                  <h1 className="font-bold text-2xl text-red-500">
                    Operações que geram resultados diários
                  </h1>
                  <p className="text-lg text-gray-200">
                    Usando o BlazeNaAlta você consegue identificar os melhores
                    momentos para apostar, assim você pode até duplicar seu
                    dinheiro.
                  </p>
                </div>
                <div className="bg-gray-700 p-7 rounded-lg">
                  <h1 className="font-bold text-2xl text-red-500">
                    Lucre no mercado mesmo sendo iniciante
                  </h1>
                  <p className="text-lg text-gray-200">
                    Você não precisa entender do mercado Basta apenas copiar
                    nossos sinais gratuitos da nossa inteligência artificial.
                  </p>
                </div>
                <div className="bg-gray-700 p-7 rounded-lg">
                  <h1 className="font-bold text-2xl text-red-500">
                    Faça as operações de onde quiser, apenas com o celular
                  </h1>
                  <p className="text-lg text-gray-200">
                    Apenas com o seu celular em mãos você consegue ter acesso
                    aos melhores momentos para realizar sua aposta.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="mt-[100px]">
            <div className="container mx-auto">
              <h1 className="text-4xl mb-10 font-bold text-red-500">
                Nossos planos
              </h1>
              <Slider {...settingsFirst} className="gap-5">
                <div className="bg-gray-700 rounded-lg p-10 text-center w-[90%]">
                  <div className="flex items-center justify-center">
                    <img
                      className="mb-4 w-[150px] h-[150px]"
                      src="/logo.png"
                      alt="logo"
                    />
                  </div>
                  <h1 className="text-2xl font-bold text-red-500">Mensal</h1>
                  <div className="flex items-center justify-center p-5 border border-gray-400 rounded-lg my-5">
                    <span className="text-lg text-gray-400">R$</span>
                    <h2 className="text-3xl font-bold text-red-500">57,99</h2>
                    <span className="text-lg text-gray-400">/mês</span>
                  </div>
                  <div>
                    <button
                      onClick={() =>
                        router.push('https://pay.kiwify.com.br/Ng8dZ9F')
                      }
                      className="my-5 py-4 px-5 bg-red-500 rounded-lg text-white uppercase font-bold text-lg"
                    >
                      Assinar
                    </button>
                  </div>
                </div>
                <div className="bg-gray-700 rounded-lg p-10 text-center w-[90%]">
                  <div className="flex items-center justify-center">
                    <img
                      className="mb-4 w-[150px] h-[150px]"
                      src="/logo.png"
                      alt="logo"
                    />
                  </div>
                  <h1 className="text-2xl font-bold text-red-500">
                    Trimestral
                  </h1>
                  <div className="flex items-center justify-center p-5 border border-gray-400 rounded-lg my-5">
                    <span className="text-lg text-gray-400">R$</span>
                    <h2 className="text-3xl font-bold text-red-500">171,99</h2>
                    <span className="text-lg text-gray-400">/trimestre</span>
                  </div>
                  <div>
                    <button
                      onClick={() =>
                        router.push('https://pay.kiwify.com.br/TAAxTLl')
                      }
                      className="my-5 py-4 px-5 bg-red-500 rounded-lg text-white uppercase font-bold text-lg"
                    >
                      Assinar
                    </button>
                  </div>
                </div>
                <div className="bg-gray-700 rounded-lg p-10 text-center w-[90%]">
                  <div className="flex items-center justify-center">
                    <img
                      className="mb-4 w-[150px] h-[150px]"
                      src="/logo.png"
                      alt="logo"
                    />
                  </div>
                  <h1 className="text-2xl font-bold text-red-500">Anual</h1>
                  <div className="flex items-center justify-center p-5 border border-gray-400 rounded-lg my-5">
                    <span className="text-lg text-gray-400">R$</span>
                    <h2 className="text-3xl font-bold text-red-500">627,99</h2>
                    <span className="text-lg text-gray-400">/ano</span>
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        router.push('https://pay.kiwify.com.br/TpUtRBf')
                      }}
                      className="my-5 py-4 px-5 bg-red-500 rounded-lg text-white uppercase font-bold text-lg"
                    >
                      Assinar
                    </button>
                  </div>
                </div>
                <div className="bg-gray-700 rounded-lg-lg p-10 text-center w-[90%]">
                  <div className="flex items-center justify-center">
                    <img
                      className="mb-4 w-[150px] h-[150px]"
                      src="/logo.png"
                      alt="logo"
                    />
                  </div>
                  <h1 className="text-2xl font-bold text-red-500">Lifetime</h1>
                  <div className="flex items-center justify-center p-5 border border-gray-400 rounded-lg my-5">
                    <span className="text-lg text-gray-400">R$</span>
                    <h2 className="text-3xl font-bold text-red-500">1359,99</h2>
                    <span className="text-lg text-gray-400">/eterno</span>
                  </div>
                  <div>
                    <button
                      className="my-5 py-4 px-5 bg-red-500 rounded-lg text-white uppercase font-bold text-lg disabled:opacity-80"
                      disabled
                    >
                      desativado
                    </button>
                  </div>
                </div>
              </Slider>
            </div>
          </section>
          <section className="mt-[180px]">
            <div className="container mx-auto">
              <h1 className="text-4xl mb-10 font-bold text-red-500">
                O que nossos clientes dizem sobre nós?
              </h1>
              <Slider {...settingsSecond} className="gap-5">
                <div className="bg-gray-700 rounded-lg p-10 w-[90%]">
                  <h1 className="text-2xl font-bold text-red-500">
                    Victor Moreira
                  </h1>
                  <p>
                    Os resultados desse robô são incríveis, usando o BlazeNaAlta
                    eu consegui recuperar meu investimento em 1 dia e em 3 dias
                    eu já tinha triplicado meu investimento inicial.
                  </p>
                  <div className="flex gap-2 text-yellow-500 mt-5">
                    <Star size={30} weight="fill" />
                    <Star size={30} weight="fill" />
                    <Star size={30} weight="fill" />
                    <Star size={30} weight="fill" />
                    <Star size={30} weight="fill" />
                  </div>
                </div>
                <div className="bg-gray-700 rounded-lg p-10 w-[90%]">
                  <h1 className="text-2xl font-bold text-red-500">
                    Lucas Pereira
                  </h1>
                  <p>
                    Com o BlazeNaAlta eu consegui ganhar muito dinheiro, pelo
                    menos comigo eu nunca tive nenhum prejuízo, sem contar que o
                    suporte é impecável!!!
                  </p>
                  <div className="flex gap-2 text-yellow-500 mt-5">
                    <Star size={30} weight="fill" />
                    <Star size={30} weight="fill" />
                    <Star size={30} weight="fill" />
                    <Star size={30} weight="fill" />
                    <Star size={30} weight="fill" />
                  </div>
                </div>
                <div className="bg-gray-700 rounded-lg p-10 w-[90%]">
                  <h1 className="text-2xl font-bold text-red-500">
                    Arthur Souza
                  </h1>
                  <p>
                    O suporte do pessoal é incrível, além de tudo, é muito
                    simples de usar e dá muito retorno, se eu tivesse que dar
                    uma nota seria 1000/10!!!!!
                  </p>
                  <div className="flex gap-2 text-yellow-500 mt-5">
                    <Star size={30} weight="fill" />
                    <Star size={30} weight="fill" />
                    <Star size={30} weight="fill" />
                    <Star size={30} weight="fill" />
                    <Star size={30} weight="fill" />
                  </div>
                </div>
                <div className="bg-gray-700 rounded-lg p-10 w-[90%]">
                  <h1 className="text-2xl font-bold text-red-500">
                    Wesley Dos Santos
                  </h1>
                  <p>
                    Com pouco investimento hoje eu tenho dinheiro pra comprar
                    tudo que eu quero, o pessoal da BlazeNaAlta me ajudou muito
                    nessa jornada, simplesmente 10/10!
                  </p>
                  <div className="flex gap-2 text-yellow-500 mt-5">
                    <Star size={30} weight="fill" />
                    <Star size={30} weight="fill" />
                    <Star size={30} weight="fill" />
                    <Star size={30} weight="fill" />
                    <Star size={30} weight="fill" />
                  </div>
                </div>
                <div className="bg-gray-700 rounded-lg p-10 w-[90%]">
                  <h1 className="text-2xl font-bold text-red-500">
                    Evandro Silva
                  </h1>
                  <p>
                    Realmente impressionante, no início eu não acreditava, mas
                    depois que comecei a ganhar dinheiro com isso foi incrível,
                    e o suporte do pessoal é top.
                  </p>
                  <div className="flex gap-2 text-yellow-500 mt-5">
                    <Star size={30} weight="fill" />
                    <Star size={30} weight="fill" />
                    <Star size={30} weight="fill" />
                    <Star size={30} weight="fill" />
                    <Star size={30} weight="fill" />
                  </div>
                </div>
              </Slider>
            </div>
          </section>
        </div>
      </main>
      <footer className="bg-gray-900 py-10">
        <div className="container mx-auto">
          <p className="font-bold text-2xl text-red-500">
            Todos os direitos reservados ₢ Blaze Na Alta 2022
          </p>
        </div>
      </footer>
    </>
  )
}

export default Home
