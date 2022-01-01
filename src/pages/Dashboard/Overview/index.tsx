import { Link } from 'react-router-dom'
import { HappyPerson } from '../../../assets/ornaments'
import { HiOutlineUserCircle } from 'react-icons/hi'
import {
  AtSignIcon,
  CalendarIcon,
  ChatIcon,
  Icon,
  PhoneIcon,
  QuestionIcon,
  TriangleDownIcon,
} from '@chakra-ui/icons'

const DashboardOverviewPage = () => {
  return (
    <div className="py-6 px-4 grid gap-6">
      <div className="grid grid-cols-4 gap-6">
        <div className="report-card">
          <div className="card">
            <div className="card-body flex flex-col">
              <div className="flex flex-row justify-between items-center">
                <div className="h6 text-indigo-500 fad fa-shopping-cart"></div>
                <span className="rounded-full text-white px-2 py-0.5  bg-green-500 text-xs">
                  12%
                  <i className="fal fa-chevron-up ml-1"></i>
                </span>
              </div>

              <div className="mt-8">
                <h1 className="text-3xl font-semibold num-4">2732</h1>
                <p>items sales</p>
              </div>
            </div>
          </div>
          <div className="footer bg-white p-1 mx-4 border border-t-0 rounded rounded-t-none"></div>
        </div>

        <div className="report-card">
          <div className="card">
            <div className="card-body flex flex-col">
              <div className="flex flex-row justify-between items-center">
                <div className="h6 text-red-500 fad fa-store"></div>
                <span className="rounded-full text-white px-2 py-0.5  bg-red-400 text-xs">
                  6%
                  <i className="fal fa-chevron-down ml-1"></i>
                </span>
              </div>
              <div className="mt-8">
                <h1 className="text-3xl font-semibold num-4">5675</h1>
                <p>new orders</p>
              </div>
            </div>
          </div>
          <div className="footer bg-white p-1 mx-4 border border-t-0 rounded rounded-t-none"></div>
        </div>

        <div className="report-card">
          <div className="card">
            <div className="card-body flex flex-col">
              <div className="flex flex-row justify-between items-center">
                <div className="h6 text-yellow-500 fad fa-sitemap"></div>
                <span className="rounded-full text-white px-2 py-0.5  bg-green-500 text-xs">
                  72%
                  <i className="fal fa-chevron-up ml-1"></i>
                </span>
              </div>

              <div className="mt-8">
                <h1 className="text-3xl font-semibold num-4">5676</h1>
                <p>total Products</p>
              </div>
            </div>
          </div>
          <div className="footer bg-white p-1 mx-4 border border-t-0 rounded rounded-t-none"></div>
        </div>

        <div className="report-card">
          <div className="card">
            <div className="card-body flex flex-col">
              <div className="flex flex-row justify-between items-center">
                <div className="h6 text-pink-500 fad fa-users"></div>
                <span className="rounded-full text-white px-2 py-0.5  bg-green-500 text-xs">
                  150%
                  <i className="fal fa-chevron-up ml-1"></i>
                </span>
              </div>

              <div className="mt-8">
                <h1 className="text-3xl font-semibold num-4">464564</h1>
                <p>new Visitor</p>
              </div>
            </div>
          </div>
          <div className="footer bg-white p-1 mx-4 border border-t-0 rounded rounded-t-none"></div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="card-bordered bg-sky-500 border-sky-500 shadow-md text-white px-4 py-4">
          <div className="card-bordered-body flex flex-col md:flex-row items-center">
            <div className="w-40 h-40 flex justify-center items-center">
              <HappyPerson />
            </div>
            <div className="ml-0 md:ml-10 mt-10 md:mt-0">
              <h1 className="text-xl">Keren, Adam!</h1>
              <p className="text-white text-xs">
                Ayo ikuti lebih banyak kelas dan event.
              </p>
              <ul className="mt-4">
                <li className="text-sm font-light">
                  <i className="fad fa-check-double mr-2 mb-2"></i> Daftar
                  Program
                </li>
                <li className="text-sm font-light">
                  <i className="fad fa-check-double mr-2 mb-2"></i> Ikuti dan
                  Selesaikan Program
                </li>
                <li className="text-sm font-light">
                  <i className="fad fa-check-double mr-2"></i> Peroleh Ilmu
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <div className="card-bordered flex items-center">
            <div className="card-bordered-body flex-1 flex items-center">
              <div className="px-3 py-2 rounded bg-green-500 text-white mr-3">
                <i className="fad fa-book-reader"></i>
              </div>
              <div className="flex flex-col">
                <h1 className="text-lg font-bold">
                  <span className="num-2"></span> Kelas
                </h1>
                <Link
                  to={{ pathname: `/kelas` }}
                  className="text-xs underline text-gray-500 hover:text-gray-200"
                >
                  <span className="num-2"></span> Lihat dan pelajari lebih
                  banyak kelas
                </Link>
              </div>
            </div>
          </div>
          <div className="card-bordered flex items-center">
            <div className="card-bordered-body flex-1 flex items-center">
              <div className="px-3 py-2 rounded bg-rose-500 text-white mr-3">
                <i className="fad fa-calendar-alt"></i>
              </div>
              <div className="flex flex-col">
                <h1 className="text-lg font-bold">
                  <span className="num-2"></span> Event
                </h1>
                <Link
                  to={{ pathname: `/event` }}
                  className="text-xs underline text-gray-500 hover:text-gray-200"
                >
                  <span className="num-2"></span> Lihat dan ikuti lebih banyak
                  event
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6">
        <div className="card-bordered">
          <div className="card-bordered-header text-xl font-bold">
            Tentang Kamu
          </div>
          <div className="card-bordered-body">
            <div className="flex justify-center items-center text-center flex-col md:flex-row space-x-0 md:space-x-4 space-y-4 md:space-y-0 md:justify-start pb-12 md:pb-8">
              {/* <img
                src={readState.readSuccessData?.picture_url}
                onError={(e) => (e.target.src = AlternativeAvaImage)}
                alt="profile"
                className="w-28 h-28 object-cover rounded-full border border-gray-300"
              /> */}
              <Icon as={HiOutlineUserCircle} w={28} h={28} color="sky.500" />

              <h1 className="text-2xl font-bold">Adam</h1>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2">
              <ul className="mt-4 space-y-10 md:space-y-3">
                <li className="flex items-center flex-col md:flex-row text-center md:text-left">
                  <div className="bg-blueberry-100 w-12 h-12 flex justify-center items-center rounded-full mr-2">
                    <ChatIcon />
                  </div>
                  <div>
                    <p className="text-lg font-medium">NIK</p>
                    <p className="text-gray_monkey-300">ok </p>
                  </div>
                </li>
                <li className="flex items-center flex-col md:flex-row text-center md:text-left">
                  <div className="bg-blueberry-100 w-12 h-12 flex justify-center items-center rounded-full mr-2">
                    <QuestionIcon />
                  </div>
                  <div>
                    <p className="text-lg font-medium">Jenis Kelamin</p>
                    <p className="text-gray_monkey-300">Laki-laki </p>
                  </div>
                </li>
                <li className="flex items-center flex-col md:flex-row text-center md:text-left">
                  <div className="bg-blueberry-100 w-12 h-12 flex justify-center items-center rounded-full mr-2">
                    <CalendarIcon />
                  </div>
                  <div>
                    <p className="text-lg font-medium">
                      Tempat / Tanggal Lahir
                    </p>
                    <p className="text-gray_monkey-300">Jakrta, 12/12/2001 </p>
                  </div>
                </li>
                <li className="flex items-center flex-col md:flex-row text-center md:text-left">
                  <div className="bg-blueberry-100 w-12 h-12 flex justify-center items-center rounded-full mr-2">
                    <TriangleDownIcon />
                  </div>
                  <div>
                    <p className="text-lg font-medium">Alamat</p>
                    <p className="text-gray_monkey-300">Jakarta, Indonesia.</p>
                  </div>
                </li>
              </ul>
              <ul className="mt-4 space-y-10 md:space-y-3">
                <li className="flex items-center flex-col md:flex-row text-center md:text-left">
                  <div className="bg-blueberry-100 w-12 h-12 flex justify-center items-center rounded-full mr-2">
                    <PhoneIcon />
                  </div>
                  <div>
                    <p className="text-lg font-medium">No. Telp</p>
                    <p className="text-gray_monkey-300">0877-2233-333 </p>
                  </div>
                </li>
                <li className="flex items-center flex-col md:flex-row text-center md:text-left">
                  <div className="bg-blueberry-100 w-12 h-12 flex justify-center items-center rounded-full mr-2">
                    <AtSignIcon />
                  </div>
                  <div>
                    <p className="text-lg font-medium">Email</p>
                    <p className="text-gray_monkey-300">email@email.com </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardOverviewPage
