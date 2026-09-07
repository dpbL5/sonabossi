const testimonials = [
  {
    name: "Anh Minh Tuấn",
    role: "Chủ căn hộ Masteri",
    text: "SonaBossi đã mang đến cho gia đình tôi một không gian sống hoàn hảo. Đội ngũ chuyên nghiệp, tư vấn tận tình và thi công đúng tiến độ.",
  },
  {
    name: "Chị Thu Hằng",
    role: "Chủ biệt thự Q.2",
    text: "Tôi rất ấn tượng với phong cách tân cổ điển mà SonaBossi thiết kế. Mọi chi tiết đều được chăm chút tỉ mỉ, vượt quá mong đợi của tôi.",
  },
  {
    name: "Anh Hoàng Long",
    role: "Chủ nhà phố Đà Nẵng",
    text: "Giá cả minh bạch, chất lượng đảm bảo. Tôi đã giới thiệu SonaBossi cho nhiều người thân và ai cũng hài lòng.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#ba0c2f] font-semibold text-sm uppercase tracking-wider">
            Khách hàng
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#00205b]">
            Phản hồi từ khách hàng
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm"
            >
              <div className="flex text-[#ba0c2f] mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed italic">
                &ldquo;{item.text}&rdquo;
              </p>
              <div className="mt-6 flex items-center">
                <div className="w-10 h-10 bg-[#00205b] rounded-full flex items-center justify-center text-white font-semibold">
                  {item.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <div className="font-semibold text-[#00205b]">{item.name}</div>
                  <div className="text-sm text-gray-500">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
