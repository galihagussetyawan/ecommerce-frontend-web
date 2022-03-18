import React, { useState, useEffect, useContext, Fragment } from 'react';

//import components
import AlertNotification from '../../../components/alert-notification/AlertNotification';

//import context
import CategoryContext from '../../../context/CategoryContext';

//import serices
import ImageService from '../../../services/ImageService';
import ProductService from '../../../services/ProductService';

export default function AddProductComponent() {

    const { categories } = useContext(CategoryContext);

    const [fileArray, setFileArray] = useState([]);
    const [file, setFile] = useState(null);

    const [productDetail, setProductDetail] = useState({
        name: "",
        description: "",
        price: "",
        size: "",
        stock: "",
        category: "Fashion Pria"
    });

    const [notification, setNotification] = useState({
        isOpen: false,
        status: "SUCCESS",
        message: "Successfully"
    });

    useEffect(() => {

        if (notification.isOpen) {
            setTimeout(() => {
                setNotification({
                    isOpen: false,
                    status: "ERROR",
                    message: "ERROR"
                })
            }, 3000);
        }

    }, [notification.isOpen])

    const handleChangeMultipleImage = (event) => {
        if (Array.from(event.target.files).length > 5) {
            return;
        }

        let object = [];
        let arr = [];

        object.push(event.target.files);

        for (let i = 0; i < object[0].length; i++) {
            arr.push(URL.createObjectURL(object[0][i]))
        }

        setFileArray(arr);
        setFile(event.target.files);
    }

    const handleUpload = (event) => {
        event.preventDefault();

        ImageService.uploadImageProduct(file)
            .then(imageResponse => {

                ProductService.createProduct(
                    productDetail.name,
                    productDetail.description,
                    productDetail.category,
                    productDetail.price,
                    productDetail.size,
                    productDetail.stock
                )
                    .then(productResponse => {

                        imageResponse.forEach(image => {

                            ImageService.addImageToProduct(image.id, productResponse.id)
                        });

                        setNotification({
                            isOpen: true,
                            status: "SUCCESS",
                            message: "Berhasil menambahkan produk baru"
                        })
                    })
                    .catch(error => {

                        if (error) {
                            setNotification({
                                isOpen: true,
                                status: "ERROR",
                                message: "Gagal membuat produk baru"
                            })
                        }
                    })
            })
    }


    //handle product detail change
    const handleChangeProductName = (event) => {
        setProductDetail(prevState => ({
            ...prevState,
            name: event.target.value
        }))
    }

    const handleChangeProductDescription = (event) => {
        setProductDetail(prevState => ({
            ...prevState,
            description: event.target.value
        }))
    }

    const handleChangeProductPrice = (event) => {
        setProductDetail(prevState => ({
            ...prevState,
            price: event.target.value
        }))
    }

    const handleChangeProductSize = (event) => {
        setProductDetail(prevState => ({
            ...prevState,
            size: event.target.value
        }))
    }

    const handleChangeProductStock = (event) => {
        setProductDetail(prevState => ({
            ...prevState,
            stock: event.target.value
        }))
    }

    const handleCahngeCategory = (event) => {
        console.log(event.target.value);
    };

    const handleToggleNotification = () => {
        setNotification(prevState => ({
            ...prevState,
            isOpen: false
        }))
    };

    return (
        <Fragment>

            {
                notification.isOpen &&
                <AlertNotification
                    status={notification.status}
                    message={notification.message}
                    onClose={handleToggleNotification}
                />
            }

            <div className="md:w-full md:h-full md:flex md:flex-col md:gap-8 md:p-8 md:text-sm md:text-gray-500 md:bg-gray-100">
                <h1 className="md:text-2xl md:font-bold md:text-gray-600">Tambah Produk</h1>

                {/* upload produk section */}
                <div className="section md:w-full md:h-full md:flex md:flex-col md:gap-2 md:p-6 md:rounded-md md:bg-white">
                    <h1 className="md:font-bold md:text-lg md:text-gray-600">Upload Produk</h1>
                    <p>Format gambar jpg jpeg png dan ukuran minumum 300px x 300px(Untuk gambar optimal minimun 700px x 700px)</p>
                    <div className="md:flex md:flex-col md:gap-14">
                        <p>Pilih foto produk atau tarik dan letakkan sehingga 5 foto sekaligus</p>
                        <div className="md:w-4/5 md:flex md:gap-2 md:m-auto">
                            {
                                fileArray.length === 0
                                    ? <div className="md:w-full md:h-52 md:flex md:gap-2">
                                        <div className="md:w-1/4 md:h-full md:rounded-md md:border md:border-gray-200 md:bg-gray-100"></div>
                                        <div className="md:w-1/4 md:h-full md:rounded-md md:border md:border-gray-200 md:bg-gray-100"></div>
                                        <div className="md:w-1/4 md:h-full md:rounded-md md:border md:border-gray-200 md:bg-gray-100"></div>
                                        <div className="md:w-1/4 md:h-full md:rounded-md md:border md:border-gray-200 md:bg-gray-100"></div>
                                        <div className="md:w-1/4 md:h-full md:rounded-md md:border md:border-gray-200 md:bg-gray-100"></div>
                                    </div>
                                    : fileArray.map(url => {
                                        return (
                                            <div className="md:w-1/4 md:h-auto md:rounded-md md:border md:border-gray-200 md:bg-gray-100">
                                                <img className="md:w-full md:h-full" src={url} />
                                            </div>
                                        );
                                    })
                            }
                        </div>
                        <div className="md:m-auto">
                            <div className="md:w-44 md:h-11 md:relative">
                                <input className="md:w-full md:h-full md:absolute md:outline-none md:opacity-0" type="file" onChange={handleChangeMultipleImage} multiple />
                                <button className="md:w-full md:h-full md:border md:border-green-500 md:m-auto md:rounded-md md:text-green-500">Pilih Gambar</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*akhir upload produk section */}

                {/* information produk section */}
                <div className="section md:w-full md:h-full md:flex md:flex-col md:gap-2 md:p-6 md:rounded-md md:bg-white">
                    <h1 className="md:font-bold md:text-lg">Information Produk</h1>
                    <div className="md:flex md:justify-center md:items-center md:gap-20">
                        <div className="md:w-1/5">
                            <div className="md:font-bold">Nama Produk</div>
                            <p>Nama min 5 kata terdiri dari jenis produk, merk, dan keterangan seperti warna, bahan atau tipe.</p>
                        </div>
                        <div className="md:w-4/5">
                            <input className="md:w-full md:p-2 md:outline-none md:rounded-md md:border md:border-gray-300" onChange={handleChangeProductName} />
                            <p className="md:text-right md:text-gray-3f00">0/70</p>
                        </div>
                    </div>
                    <div className="md:flex md:justify-center md:items-center md:gap-20">
                        <div className="md:w-1/5">
                            <div className="md:font-bold">Kategori</div>
                        </div>
                        <div className="md:w-4/5">
                            <select className="md:w-1/3 md:p-2 md:outline-none md:rounded-md md:border md:border-gray-300 md:bg-white" onChange={handleCahngeCategory}>
                                {
                                    categories.map((data, index) => {
                                        return (
                                            <option key={index} value={data.name}>{data.name}</option>
                                        );
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    <div className="md:flex md:justify-center md:items-center md:gap-20">
                        <div className="md:w-1/5">
                            <div className="md:font-bold">Etalase</div>
                        </div>
                        <div className="md:w-4/5">
                            <input className="md:w-3/12 md:p-2 md:outline-none md:rounded-md md:border md:border-gray-300" />
                        </div>
                    </div>
                </div>
                {/*akhir information produk section */}

                {/* detail produk section */}
                <div className="section md:w-full md:h-full md:flex md:flex-col md:gap-2 md:p-6 md:rounded-md md:bg-white">
                    <h1 className="md:font-bold md:text-lg">Detail Produk</h1>
                    <div className="md:flex md:justify-between md:items-center md:gap-20">
                        <div className="md:w-1/5">
                            <div className="md:font-bold">Kondisi</div>
                        </div>
                        <div className="md:w-4/5">
                            <div className="md:w-1/2 md:flex md:gap-12">
                                <div className="md:flex md:items-center md:gap-1">
                                    <input type="checkbox" />
                                    <p>Baru</p>
                                </div>
                                <div className="md:flex md:items-center md:gap-1">
                                    <input type="checkbox" />
                                    <p>Bekas</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:flex md:gap-20">
                        <div className="md:w-1/5">
                            <div className="md:font-bold">Deskripsi</div>
                            <p>Pastikan  deskripsi produk memuat spesifikasi, ukuran, bahan, masa berlaku, dan lainnya. Semakin detail, semakin berguna bagi pembeli.</p>
                        </div>
                        <div className="md:w-4/5">
                            <textarea className="md:w-3/5 md:h-40 md:p-2 md:outline-none md:rounded-md md:border md:border-gray-300 overflow-y-scroll" type="text" maxLength="2000" onChange={handleChangeProductDescription} />
                        </div>
                    </div>
                </div>
                {/*akhir detail produk section */}

                {/* harga section */}
                <div className="section md:w-full md:h-full md:flex md:flex-col md:gap-2 md:p-6 md:rounded-md md:bg-white">
                    <h1 className="md:font-bold md:text-lg">Harga</h1>
                    <div className="md:flex md:justify-center md:items-center md:gap-20">
                        <div className="md:w-1/5">
                            <div className="md:font-bold">Minimun Pemesanan</div>
                            <p>Atur jumlah minimum yang harus dibeli untuk produk ini.</p>
                        </div>
                        <div className="md:w-4/5">
                            <input className="md:w-full md:p-2 md:outline-none md:rounded-md md:border md:border-gray-300" />
                        </div>
                    </div>
                    <div className="md:flex md:justify-center md:items-center md:overflow-hidden md:gap-20">
                        <div className="md:w-1/5">
                            <div className="md:font-bold">Harga Satuan</div>
                        </div>
                        <div className="md:w-4/5 md:overflow-hidden md:rounded-md md:border md:border-gray-300">
                            <div className="md:w-full md:flex">
                                <div className="md:p-2 md:flex md:justify-center md:items-center md:font-bold md:bg-gray-200">Rp</div>
                                <input className="md:w-full md:p-2 outline-none" type="number" onChange={handleChangeProductPrice} />
                            </div>
                        </div>
                    </div>
                    <div className="md:flex md:justify-center md:items-center md:gap-20">
                        <div className="md:w-1/5">
                            <div className="md:font-bold">Harga Grosir</div>
                        </div>
                        <div className="md:w-4/5">
                            {/* <input className="md:w-3/12 md:p-2 md:outline-none md:rounded-md md:border md:border-gray-300" /> */}
                            <button className="md:px-3 md:py-2 md:rounded-md md:border md:border-green-500 md:text-green-500">+Tambah Harga Grosir</button>
                        </div>
                    </div>
                </div>
                {/* akhir harga section */}

                {/* pengelolaan produk section*/}
                <div className="section md:w-full md:h-full md:flex md:flex-col md:gap-2 md:p-6 md:rounded-md md:bg-white">
                    <h1 className="md:font-bold md:text-lg">Penglolaan Produk</h1>
                    <div className="md:flex md:justify-center md:items-center md:gap-20">
                        <div className="md:w-1/5">
                            <div className="md:font-bold">Status Produk</div>
                            <p>Jika statusmu aktif, produkmu dapat dicari oleh calon pembeli.</p>
                        </div>
                        <div className="md:w-4/5">
                            <input className="md:w-full md:p-2 md:outline-none md:rounded-md md:border md:border-gray-300" />
                        </div>
                    </div>
                    <div className="md:flex md:justify-center md:items-center md:overflow-hidden md:gap-20">
                        <div className="md:w-1/5">
                            <div className="md:font-bold">Stock Produk</div>
                        </div>
                        <div className="md:w-4/5">
                            <input className="md:w-full md:p-2 md:outline-none md:rounded-md md:border md:border-gray-300" type="number" onChange={handleChangeProductStock} />
                        </div>
                    </div>
                </div>
                {/* akhir pengelolaan produk section */}

                {/* Berat dan Pengiriman section*/}
                <div className="section md:w-full md:h-full md:flex md:flex-col md:gap-2 md:p-6 md:rounded-md md:bg-white">
                    <h1 className="md:font-bold md:text-lg">Berat & Pengiriman</h1>
                    <div className="md:flex md:justify-center md:items-center md:gap-20">
                        <div className="md:w-1/5">
                            <div className="md:font-bold">Berat Produk</div>
                            <p>Masukkan berat dengan menimbang produk setelah dikemas.</p>
                        </div>
                        <div className="md:w-4/5">
                            <div className="md:flex md:gap-5">
                                <select className="md:p-2 md:outline-none md:rounded-md md:border md:border-gray-300 md:bg-white">
                                    <option>Gram (g)</option>
                                </select>
                                <input className="md:w-1/4 md:p-2 md:rounded-md md:outline-none md:border md:border-gray-300" onChange={handleChangeProductSize} />
                            </div>
                        </div>
                    </div>

                    <div className="md:flex md:justify-center md:items-center md:overflow-hidden md:gap-20">
                        <div className="md:w-1/5">
                            <div className="md:font-bold">Ukuran Produk</div>
                            <p>Masukkan ukuran produk setelah dikemas untuk menghitung berat volume.</p>
                        </div>
                        <div className="md:w-4/5">
                            <div className="md:flex md:gap-5">
                                <div className="md:w-1/5 md:flex md:rounded-md md:border md:border-gray-300 md:overflow-hidden">
                                    <input className="md:w-full md:p-2 md:outline-none" type="number" placeholder="panjang" />
                                    <div className="md:p-2 md:bg-gray-200">cm</div>
                                </div>
                                <div className="md:w-1/5 md:flex md:rounded-md md:border md:border-gray-300 md:overflow-hidden">
                                    <input className="md:w-full md:p-2 md:outline-none" type="number" placeholder="lebar" />
                                    <div className="md:p-2 md:bg-gray-200">cm</div>
                                </div>
                                <div className="md:w-1/5 md:flex md:rounded-md md:border md:border-gray-300 md:overflow-hidden">
                                    <input className="md:w-full md:p-2 md:outline-none" type="number" placeholder="tinggi" />
                                    <div className="md:p-2 md:bg-gray-200">cm</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:flex md:justify-center md:items-center md:overflow-hidden md:gap-20">
                        <div className="md:w-1/5">
                            <div className="md:font-bold">Asuransi Pengiriman</div>
                            <p>Menanggung pengembalian produk & ongkir untuk penjual maupun pembeli jika terjadi kerusakan / kehilangan saat pengiriman. </p>
                        </div>
                        <div className="md:w-4/5">
                            <div className="md:flex md:gap-5">
                                <div className="md:w-1/5 md:flex md:gap-2">
                                    <input type="checkbox" />
                                    <div>
                                        <div>Wajib</div>
                                        <p>Kamu mewajibkan pembeli untuk  mengaktifkan asuransi pengiriman.</p>
                                    </div>
                                </div>
                                <div className="md:w-1/5 md:flex md:gap-2">
                                    <input type="checkbox" />
                                    <div>
                                        <div>Opsional</div>
                                        <p>Kamu mewajibkan pembeli untuk  mengaktifkan asuransi pengiriman.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:flex md:justify-center md:items-center md:overflow-hidden md:gap-20">
                        <div className="md:w-1/5">
                            <div className="md:font-bold">Layanan Pengiriman</div>
                            <p>Atur layanan pengiriman sesuai jenis produkmu.</p>
                        </div>
                        <div className="md:w-4/5">
                            <div className="md:flex md:gap-5">
                                <div className="md:w-1/5 md:flex md:gap-2">
                                    <input type="checkbox" />
                                    <div>
                                        <div>Standar</div>
                                    </div>
                                </div>
                                <div className="md:w-1/5 md:flex md:gap-2">
                                    <input type="checkbox" />
                                    <div>
                                        <div>Custom</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* akhir berat dan pengiriman section */}

                <div className="md:w-full md:flex md:justify-end md:gap-3 md:p-6 md:rounded-md md:bg-white">
                    <button className="md:w-40 md:py-2 md:rounded-md md:border md:border-gray-300">Batal</button>
                    <button className="md:w-40 md:py-2 md:rounded-md md:border md:border-gray-300">Simpan & Tambah</button>
                    <button className="md:w-40 md:py-2 md:rounded-md md:border md:border-green-500 md:text-white md:bg-green-500" onClick={handleUpload}>Simpan</button>
                </div>

            </div>
        </Fragment>
    )
};