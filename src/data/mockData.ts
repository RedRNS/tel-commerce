export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'Tugas Kuliah' | 'Bisnis Mahasiswa' | 'Jasa & Keahlian';
  imageUrl: string;
  sellerName: string;
  description: string;
  isBoosted: boolean;
  rating: number;
  sold: number;
}

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Jasa Pembuatan Skripsi',
    price: 500000,
    category: 'Tugas Kuliah',
    imageUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iIzNiODJmNiIvPgogIDx0ZXh0IHg9IjIwMCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIj5Ta3JpcHNpPC90ZXh0Pgo8L3N2Zz4=',
    sellerName: 'Ahmad Wijaya',
    description: 'Jasa pembuatan skripsi berkualitas dengan bimbingan intensif. Pengalaman 5+ tahun membantu mahasiswa menyelesaikan tugas akhir.',
    isBoosted: true,
    rating: 4.8,
    sold: 127
  },
  {
    id: '2',
    name: 'Kaos Custom Design',
    price: 75000,
    category: 'Bisnis Mahasiswa',
    imageUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iIzEwYjk4MSIvPgogIDx0ZXh0IHg9IjIwMCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIj5LYW9zIEN1c3RvbTwvdGV4dD4KPC9zdmc+',
    sellerName: 'Sarah Creative',
    description: 'Kaos custom dengan desain unik dan berkualitas. Bahan cotton combed 30s, sablon DTF tahan lama.',
    isBoosted: false,
    rating: 4.5,
    sold: 89
  },
  {
    id: '3',
    name: 'Les Privat Matematika',
    price: 100000,
    category: 'Jasa & Keahlian',
    imageUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2Y1OWUwYiIvPgogIDx0ZXh0IHg9IjIwMCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIj5MZXMgTWF0ZW1hdGlrYTwvdGV4dD4KPC9zdmc+',
    sellerName: 'Budi Santoso',
    description: 'Les privat matematika untuk tingkat SMA dan persiapan UTBK. Metode pembelajaran yang mudah dipahami.',
    isBoosted: true,
    rating: 4.9,
    sold: 156
  },
  {
    id: '4',
    name: 'Jasa Pengetikan Dokumen',
    price: 5000,
    category: 'Tugas Kuliah',
    imageUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iIzhiNWNmNiIvPgogIDx0ZXh0IHg9IjIwMCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIj5QZW5nZXRpa2FuPC90ZXh0Pgo8L3N2Zz4=',
    sellerName: 'Maya Typing',
    description: 'Jasa pengetikan dokumen profesional dengan tingkat akurasi tinggi. Harga per halaman.',
    isBoosted: false,
    rating: 4.6,
    sold: 234
  },
  {
    id: '5',
    name: 'Makanan Khas Daerah',
    price: 25000,
    category: 'Bisnis Mahasiswa',
    imageUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2VmNDQ0NCIvPgogIDx0ZXh0IHg9IjIwMCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIj5NYWthbmFuPC90ZXh0Pgo8L3N2Zz4=',
    sellerName: 'Kuliner Nusantara',
    description: 'Makanan khas daerah dengan cita rasa autentik. Dibuat dengan resep turun temurun.',
    isBoosted: false,
    rating: 4.3,
    sold: 67
  },
  {
    id: '6',
    name: 'Jasa Desain Grafis',
    price: 150000,
    category: 'Jasa & Keahlian',
    imageUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iIzA2YjZkNCIvPgogIDx0ZXh0IHg9IjIwMCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIj5EZXNhaW4gR3JhZmlzPC90ZXh0Pgo8L3N2Zz4=',
    sellerName: 'Creative Studio',
    description: 'Jasa desain grafis profesional untuk logo, poster, brosur, dan kebutuhan branding lainnya.',
    isBoosted: true,
    rating: 4.7,
    sold: 98
  },
  {
    id: '7',
    name: 'Bimbingan Belajar Online',
    price: 200000,
    category: 'Tugas Kuliah',
    imageUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iIzg0Y2MxNiIvPgogIDx0ZXh0IHg9IjIwMCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIj5CaW1iZWw8L3RleHQ+Cjwvc3ZnPg==',
    sellerName: 'EduMaster',
    description: 'Bimbingan belajar online untuk berbagai mata pelajaran. Tutor berpengalaman dan metode interaktif.',
    isBoosted: false,
    rating: 4.4,
    sold: 72
  },
  {
    id: '8',
    name: 'Aksesoris Handmade',
    price: 35000,
    category: 'Bisnis Mahasiswa',
    imageUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2VjNDg5OSIvPgogIDx0ZXh0IHg9IjIwMCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIj5Ba3Nlc29yaXM8L3RleHQ+Cjwvc3ZnPg==',
    sellerName: 'Handcraft Corner',
    description: 'Aksesoris handmade unik dan berkualitas. Dibuat dengan detail dan finishing yang rapi.',
    isBoosted: false,
    rating: 4.2,
    sold: 45
  },
  {
    id: '9',
    name: 'Jasa Fotografi Professional',
    price: 300000,
    category: 'Jasa & Keahlian',
    imageUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iIzY2NjZmZiIvPgogIDx0ZXh0IHg9IjIwMCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIj5Gb3RvZ3JhZmk8L3RleHQ+Cjwvc3ZnPg==',
    sellerName: 'PhotoPro Studio',
    description: 'Jasa fotografi professional untuk acara, produk, dan portrait. Hasil berkualitas tinggi dengan editing profesional.',
    isBoosted: true,
    rating: 4.9,
    sold: 114
  }
];
