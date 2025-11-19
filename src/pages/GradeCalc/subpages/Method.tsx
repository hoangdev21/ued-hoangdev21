import React from 'react';
import MainLayout from '../../../components/Layout/MainLayout';
import { Button } from '../../../components/Common';
import { ArrowLeft, BookOpen, Calculator as CalculatorIcon, Lightbulb } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Method: React.FC = () => {
  const navigate = useNavigate();

  return (
    <MainLayout title="Cách thức tính điểm">
      <div className="space-y-4 md:space-y-6">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            onClick={() => navigate('/grade-calc')}
            className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2"
          >
            <ArrowLeft size={16} className="md:w-5 md:h-5" />
            Quay lại
          </Button>
        </div>

        {/* Header */}
        <div className="card-professional p-4 md:p-8 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mb-3 md:mb-4">
            <BookOpen size={20} className="md:w-7 md:h-7 text-white" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-gradient-professional mb-2 md:mb-3">
            Hướng dẫn tính điểm
          </h1>
          <p className="text-gray-700 text-base md:text-lg max-w-md mx-auto leading-relaxed">
            Hiểu rõ cách tính GPA và các quy tắc quan trọng
          </p>
        </div>

        {/* Formula Section */}
        <div className="card-professional p-4 md:p-6">
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
              <CalculatorIcon size={12} className="md:w-4 md:h-4 text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gradient-professional">Công thức tính GPA</h3>
          </div>
          <div className="space-y-3 md:space-y-4">
            <div className="p-4 md:p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
              <h4 className="font-bold text-base md:text-lg mb-2 md:mb-3 text-black">Điểm trung bình tích lũy (GPA)</h4>
              <p className="text-gray-700 mb-3 md:mb-4 leading-relaxed text-sm md:text-base">
                GPA được tính theo công thức tổng hợp điểm số có trọng số của các học phần:
              </p>
              <div className="bg-white p-3 md:p-4 rounded-lg border-2 border-blue-200 text-center">
                <div className="text-xl md:text-2xl font-bold text-gradient-professional mb-1 md:mb-2">GPA = Σ(điểm × tín chỉ) / Σ(tín chỉ)</div>
                <p className="text-xs md:text-sm text-gray-600">Trong đó Σ là tổng của tất cả học phần</p>
              </div>
            </div>
          </div>
        </div>

        {/* Grade Scale Table */}
        <div className="card-professional p-4 md:p-6">
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
              <Lightbulb size={12} className="md:w-4 md:h-4 text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gradient-professional">Bảng quy đổi thang điểm</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm overflow-hidden text-xs md:text-sm">
              <thead className="bg-gradient-to-r from-neutral-gray-50 to-neutral-gray-100">
                <tr>
                  <th className="px-3 md:px-6 py-2 md:py-4 text-left font-bold text-black border-b border-neutral-gray-200">STT</th>
                  <th className="px-3 md:px-6 py-2 md:py-4 text-left font-bold text-black border-b border-neutral-gray-200">Thang 10</th>
                  <th className="px-3 md:px-6 py-2 md:py-4 text-left font-bold text-black border-b border-neutral-gray-200">Thang chữ</th>
                  <th className="px-3 md:px-6 py-2 md:py-4 text-left font-bold text-black border-b border-neutral-gray-200">Thang 4</th>
                  <th className="px-3 md:px-6 py-2 md:py-4 text-left font-bold text-black border-b border-neutral-gray-200">Trạng thái</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-gray-200">
                <tr className="hover:bg-neutral-gray-50 transition-colors duration-200">
                  <td className="px-3 md:px-6 py-2 md:py-4 font-medium text-black">1</td>
                  <td className="px-3 md:px-6 py-2 md:py-4 text-gray-700">Từ 9,5 đến 10,0</td>
                  <td className="px-3 md:px-6 py-2 md:py-4 font-bold text-emerald-600">A+</td>
                  <td className="px-3 md:px-6 py-2 md:py-4 font-medium text-black">4,0</td>
                  <td className="px-3 md:px-6 py-2 md:py-4 font-semibold text-emerald-600">Đạt</td>
                </tr>
                <tr className="hover:bg-neutral-gray-50 transition-colors duration-200">
                  <td className="px-3 md:px-6 py-2 md:py-4 font-medium text-black">2</td>
                  <td className="px-3 md:px-6 py-2 md:py-4 text-gray-700">Từ 8,5 đến 9,4</td>
                  <td className="px-3 md:px-6 py-2 md:py-4 font-bold text-emerald-600">A</td>
                  <td className="px-3 md:px-6 py-2 md:py-4 font-medium text-black">4,0</td>
                  <td className="px-3 md:px-6 py-2 md:py-4 font-semibold text-emerald-600">Đạt</td>
                </tr>
                <tr className="hover:bg-neutral-gray-50 transition-colors duration-200">
                  <td className="px-3 md:px-6 py-2 md:py-4 font-medium text-black">3</td>
                  <td className="px-3 md:px-6 py-2 md:py-4 text-gray-700">Từ 8,0 đến 8,4</td>
                  <td className="px-3 md:px-6 py-2 md:py-4 font-bold text-blue-600">B+</td>
                  <td className="px-3 md:px-6 py-2 md:py-4 font-medium text-black">3,5</td>
                  <td className="px-3 md:px-6 py-2 md:py-4 font-semibold text-emerald-600">Đạt</td>
                </tr>
                <tr className="hover:bg-neutral-gray-50 transition-colors duration-200">
                  <td className="px-3 md:px-6 py-2 md:py-4 font-medium text-black">4</td>
                  <td className="px-3 md:px-6 py-2 md:py-4 text-gray-700">Từ 7,0 đến 7,9</td>
                  <td className="px-3 md:px-6 py-2 md:py-4 font-bold text-blue-600">B</td>
                  <td className="px-3 md:px-6 py-2 md:py-4 font-medium text-black">3,0</td>
                  <td className="px-3 md:px-6 py-2 md:py-4 font-semibold text-emerald-600">Đạt</td>
                </tr>
                <tr className="hover:bg-neutral-gray-50 transition-colors duration-200">
                  <td className="px-3 md:px-6 py-2 md:py-4 font-medium text-black">5</td>
                  <td className="px-3 md:px-6 py-2 md:py-4 text-gray-700">Từ 6,5 đến 6,9</td>
                  <td className="px-3 md:px-6 py-2 md:py-4 font-bold text-amber-600">C+</td>
                  <td className="px-3 md:px-6 py-2 md:py-4 font-medium text-black">2,5</td>
                  <td className="px-3 md:px-6 py-2 md:py-4 font-semibold text-emerald-600">Đạt</td>
                </tr>
                <tr className="hover:bg-neutral-gray-50 transition-colors duration-200">
                  <td className="px-3 md:px-6 py-2 md:py-4 font-medium text-black">6</td>
                  <td className="px-3 md:px-6 py-2 md:py-4 text-gray-700">Từ 5,5 đến 6,4</td>
                  <td className="px-3 md:px-6 py-2 md:py-4 font-bold text-amber-600">C</td>
                  <td className="px-3 md:px-6 py-2 md:py-4 font-medium text-black">2,0</td>
                  <td className="px-3 md:px-6 py-2 md:py-4 font-semibold text-emerald-600">Đạt</td>
                </tr>
                <tr className="hover:bg-neutral-gray-50 transition-colors duration-200">
                  <td className="px-3 md:px-6 py-2 md:py-4 font-medium text-black">7</td>
                  <td className="px-3 md:px-6 py-2 md:py-4 text-gray-700">Từ 5,0 đến 5,4</td>
                  <td className="px-3 md:px-6 py-2 md:py-4 font-bold text-orange-600">D+</td>
                  <td className="px-3 md:px-6 py-2 md:py-4 font-medium text-black">1,5</td>
                  <td className="px-3 md:px-6 py-2 md:py-4 font-semibold text-emerald-600">Đạt</td>
                </tr>
                <tr className="hover:bg-neutral-gray-50 transition-colors duration-200">
                  <td className="px-3 md:px-6 py-2 md:py-4 font-medium text-black">8</td>
                  <td className="px-3 md:px-6 py-2 md:py-4 text-gray-700">Từ 4,0 đến 4,9</td>
                  <td className="px-3 md:px-6 py-2 md:py-4 font-bold text-orange-600">D</td>
                  <td className="px-3 md:px-6 py-2 md:py-4 font-medium text-black">1,0</td>
                  <td className="px-3 md:px-6 py-2 md:py-4 font-semibold text-emerald-600">Đạt</td>
                </tr>
                <tr className="hover:bg-red-50 transition-colors duration-200">
                  <td className="px-3 md:px-6 py-2 md:py-4 font-medium text-black">9</td>
                  <td className="px-3 md:px-6 py-2 md:py-4 text-gray-700">Dưới 4,0</td>
                  <td className="px-3 md:px-6 py-2 md:py-4 font-bold text-red-600">F</td>
                  <td className="px-3 md:px-6 py-2 md:py-4 font-medium text-black">0,0</td>
                  <td className="px-3 md:px-6 py-2 md:py-4 font-semibold text-red-600">Không đạt</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Important Notes */}
        <div className="card-professional p-4 md:p-6">
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
              <Lightbulb size={12} className="md:w-4 md:h-4 text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gradient-professional">Lưu ý quan trọng</h3>
          </div>
          <div className="space-y-3 md:space-y-4">
            <div className="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-amber-50 rounded-xl border border-amber-200">
              <div className="text-xl md:text-2xl">⚠️</div>
              <div>
                <h4 className="font-bold text-black mb-1 text-sm md:text-base">Điểm làm tròn</h4>
                <p className="text-gray-700 text-xs md:text-sm">Điểm số được làm tròn đến 2 chữ số thập phân</p>
              </div>
            </div>
            <div className="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-blue-50 rounded-xl border border-blue-200">
              <div className="text-xl md:text-2xl">📚</div>
              <div>
                <h4 className="font-bold text-black mb-1 text-sm md:text-base">Tín chỉ học phần</h4>
                <p className="text-gray-700 text-xs md:text-sm">Tín chỉ của mỗi học phần được quy định trong chương trình đào tạo</p>
              </div>
            </div>
            <div className="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-red-50 rounded-xl border border-red-200">
              <div className="text-xl md:text-2xl">❌</div>
              <div>
                <h4 className="font-bold text-black mb-1 text-sm md:text-base">Học phần không đạt</h4>
                <p className="text-gray-700 text-xs md:text-sm">Học phần không đạt (dưới 4.0) vẫn tính vào GPA tổng thể</p>
              </div>
            </div>
            <div className="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-emerald-50 rounded-xl border border-emerald-200">
              <div className="text-xl md:text-2xl">🎓</div>
              <div>
                <h4 className="font-bold text-black mb-1 text-sm md:text-base">Yêu cầu tốt nghiệp</h4>
                <p className="text-gray-700 text-xs md:text-sm">GPA tối thiểu để tốt nghiệp thường là 2.0 (thang điểm 4)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tips */}
        <div className="card-professional p-4 md:p-6">
          <h3 className="text-lg md:text-xl font-bold text-gradient-professional mb-4 md:mb-6">💡 Mẹo tính điểm hiệu quả</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            <div className="p-3 md:p-4 bg-white/60 rounded-xl border border-white/40 backdrop-blur-sm">
              <h4 className="font-bold text-base md:text-lg mb-1 md:mb-2 text-black">🎯 Theo dõi thường xuyên</h4>
              <p className="text-gray-700 text-xs md:text-sm leading-relaxed">
                Cập nhật điểm số ngay sau khi có kết quả để theo dõi tiến độ học tập
              </p>
            </div>
            <div className="p-3 md:p-4 bg-white/60 rounded-xl border border-white/40 backdrop-blur-sm">
              <h4 className="font-bold text-base md:text-lg mb-1 md:mb-2 text-black">📈 Tính toán kịch bản</h4>
              <p className="text-gray-700 text-xs md:text-sm leading-relaxed">
                Ước tính điểm cần đạt cho các học phần còn lại để đạt mục tiêu GPA
              </p>
            </div>
            <div className="p-3 md:p-4 bg-white/60 rounded-xl border border-white/40 backdrop-blur-sm">
              <h4 className="font-bold text-base md:text-lg mb-1 md:mb-2 text-black">📚 Ưu tiên học phần</h4>
              <p className="text-gray-700 text-xs md:text-sm leading-relaxed">
                Tập trung vào học phần có nhiều tín chỉ để tối ưu hóa GPA
              </p>
            </div>
            <div className="p-3 md:p-4 bg-white/60 rounded-xl border border-white/40 backdrop-blur-sm">
              <h4 className="font-bold text-base md:text-lg mb-1 md:mb-2 text-black">🔄 Cập nhật liên tục</h4>
              <p className="text-gray-700 text-xs md:text-sm leading-relaxed">
                Sử dụng công cụ tính điểm để theo dõi sự thay đổi GPA theo thời gian
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Method;