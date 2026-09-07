const stats = [
  { number: "500+", label: "Công trình" },
  { number: "10+", label: "Năm kinh nghiệm" },
  { number: "50+", label: "Nhân sự" },
  { number: "98%", label: "Khách hàng hài lòng" },
];

export default function Stats() {
  return (
    <section className="py-16 bg-[#ba0c2f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((item, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white">
                {item.number}
              </div>
              <div className="mt-2 text-red-100 font-medium">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
