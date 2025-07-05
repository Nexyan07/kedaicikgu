function navbar() {
    const mq = window.matchMedia("(min-width: 1024px)");

    return {
        open: mq.matches,
        init() {
            mq.addEventListener("change", (e) => {
                this.open = e.matches;
            });
        },
    };
}


const menuItems = [
    {
        name: 'Mie Bakso Spesial',
        description: 'Mie kuah hangat dengan bakso sapi segar, sayuran, dan bumbu rahasia yang menggugah selera',
        price: 'Rp 15.000',
        rating: 4.8,
        image: 'https://images.pexels.com/photos/884600/pexels-photo-884600.jpeg?auto=compress&cs=tinysrgb&w=600',
        popular: true
    },
    {
        name: 'Sosis Bakar Premium',
        description: 'Sosis berkualitas tinggi dibakar sempurna dengan bumbu spesial dan pilihan saus',
        price: 'Rp 12.000',
        rating: 4.7,
        image: 'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=600',
        popular: true
    },
    {
        name: 'Es Jeruk Segar',
        description: 'Minuman jeruk segar alami tanpa pengawet, cocok untuk cuaca panas Maros',
        price: 'Rp 8.000',
        rating: 4.9,
        image: 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=600',
        popular: true
    },
    {
        name: 'Es Teh Manis',
        description: 'Es teh manis klasik dengan rasa yang pas, tidak terlalu manis dan sangat menyegarkan',
        price: 'Rp 6.000',
        rating: 4.6,
        image: 'https://images.pexels.com/photos/1456591/pexels-photo-1456591.jpeg?auto=compress&cs=tinysrgb&w=600',
        popular: false
    },
    {
        name: 'Nasi Goreng Spesial',
        description: 'Nasi goreng dengan bumbu khas dan tambahan telur serta sayuran segar',
        price: 'Rp 18.000',
        rating: 4.5,
        image: 'https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=600',
        popular: false
    },
    {
        name: 'Gorengan Campur',
        description: 'Aneka gorengan tradisional: tahu isi, tempe goreng, pisang goreng, dan bakwan',
        price: 'Rp 10.000',
        rating: 4.4,
        image: 'https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=600',
        popular: false
    }
];

const menuContainer = document.getElementById('menu-container');

menuItems.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105';
    card.innerHTML = `
        ${item.popular
            ? `<div
                 class="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-400
                        text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                 ⭐ Popular
               </div>`
            : ""
        }

        <div class="relative">
          <img src="${item.image}" alt="${item.name}"
               class="w-full h-48 object-cover" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>

        <div class="p-6">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-xl font-bold text-gray-800">${item.name}</h3>
            <div class="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" stroke-width="1.5" stroke="" class="size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>
              <span class="text-sm text-gray-600">${item.rating}</span>
            </div>
          </div>

          <p class="text-gray-600 mb-4 text-sm leading-relaxed">
            ${item.description}
          </p>

          <div class="flex items-center justify-between">
            <span class="text-2xl font-bold text-blue-600">
              ${typeof item.price === "number"
            ? item.price.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 0,
            })
            : item.price
        }
            </span>

            <button
              class="bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 py-2
                     rounded-full font-semibold hover:shadow-lg transform hover:scale-105
                     transition-all duration-200 flex items-center gap-2 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                </svg>
              Pesan
            </button>
          </div>
        </div>
      `;

    menuContainer.appendChild(card);
})

function toggleModalMenu() {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black/50 flex items-center justify-center z-50';
    modal.innerHTML = `
      <img src="src/img/brosur.jpg" alt="Menu" class="w-auto max-w-11/12 max-h-[80vh] rounded-lg shadow-lg">
      <button class="absolute top-4 right-4 text-white text-3xl" onclick="this.parentElement.remove();">
        &times;
      </button>
  `;
    document.body.appendChild(modal);
}



const testimonials = [
    {
        name: 'Ibu Sari',
        location: 'Maros Kota',
        rating: 5,
        text: 'Mie baksonya enak banget! Kuahnya gurih dan baksonya kenyal. Anak-anak saya selalu minta pesan lagi dari Kedai Cikgu.',
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
        name: 'Pak Ahmad',
        location: 'Mandai, Maros',
        rating: 5,
        text: 'Pelayanan cepat dan makanannya selalu fresh. Sosis bakarnya juara, bumbu rempahnya pas banget di lidah!',
        avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
        name: 'Fitri',
        location: 'Turikale',
        rating: 5,
        text: 'Es jeruknya segar banget! Cocok untuk cuaca panas di Maros. Harganya juga terjangkau untuk kantong mahasiswa.',
        avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
        name: 'Bapak Hasan',
        location: 'Bantimurung',
        rating: 5,
        text: 'Cateringnya recommended banget untuk acara keluarga. Menu lengkap, porsi pas, dan harga bersahabat!',
        avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
        name: 'Ibu Ratna',
        location: 'Maros Baru',
        rating: 5,
        text: 'Delivery-nya cepat dan makanan masih hangat sampai rumah. WhatsApp nya juga responsif, pelayanan memuaskan!',
        avatar: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
        name: 'Rizky',
        location: 'Simbang',
        rating: 5,
        text: 'Nasi goreng spesialnya mantap! Bumbunya meresap dan tidak berminyak. Jadi langganan keluarga kami.',
        avatar: 'https://images.pexels.com/photos/1845534/pexels-photo-1845534.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
];

const testimonialContainer = document.getElementById('testimonial-container');
testimonials.forEach((testimonial) => {
    const card = document.createElement('div');
    card.className = 'bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative';

    const stars = Array.from({ length: testimonial.rating }, () =>
        `<svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" stroke-width="1.5" stroke="" class="size-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
        </svg>`
    ).join('');

    card.innerHTML = `
    <div class="absolute top-4 right-4 opacity-10 text-blue-600 text-2xl">
      <i class="fa-solid fa-quote-right"></i>
    </div>
    <div class="flex items-center mb-4">
      <img src="${testimonial.avatar}" alt="${testimonial.name}" class="w-12 h-12 rounded-full object-cover mr-4" />
      <div>
        <h4 class="font-semibold text-gray-800">${testimonial.name}</h4>
        <p class="text-sm text-gray-600">${testimonial.location}</p>
      </div>
    </div>
    <div class="flex items-center mb-3">
      ${stars}
    </div>
    <p class="text-gray-700 text-sm leading-relaxed italic">
      "${testimonial.text}"
    </p>
  `;

    testimonialContainer.appendChild(card);
});
