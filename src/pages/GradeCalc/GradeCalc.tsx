import React from 'react';
import MainLayout from '../../components/Layout/MainLayout';
import { Calculator, BookOpen, TrendingUp, HelpCircle, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const GradeCalc: React.FC = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      icon: HelpCircle,
      title: 'Cách thức tính điểm',
      description: 'Hiểu rõ công thức và quy tắc tính GPA',
      path: '/grade-calc/method',
      gradient: 'from-blue-500 via-blue-600 to-indigo-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
    },
    {
      icon: Calculator,
      title: 'Tính điểm học phần',
      description: 'Thêm và quản lý điểm số các môn học',
      path: '/grade-calc/calculator',
      gradient: 'from-emerald-500 via-green-600 to-teal-600',
      bgColor: 'bg-emerald-50',
      iconColor: 'text-emerald-600',
    },
    {
      icon: TrendingUp,
      title: 'Xem kết quả',
      description: 'Theo dõi tiến độ và thống kê học tập',
      path: '/grade-calc/results',
      gradient: 'from-purple-500 via-violet-600 to-purple-700',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
    },
    {
      icon: BookOpen,
      title: 'Hướng dẫn sử dụng',
      description: 'Các mẹo và thủ thuật tính điểm hiệu quả',
      path: '/grade-calc/method',
      gradient: 'from-amber-500 via-orange-600 to-red-600',
      bgColor: 'bg-amber-50',
      iconColor: 'text-amber-600',
    },
  ];

  return (
    <MainLayout title="Tính điểm">
      <div className="space-y-4 md:space-y-6">
        {/* Header Card */}
        <div className="card-professional p-4 md:p-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-4 md:mb-6 shadow-lg">
            <Calculator size={24} className="md:w-8 md:h-8 text-white" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-gradient-professional mb-2 md:mb-3">
            Công cụ tính điểm
          </h1>
          <p className="text-black text-base md:text-lg max-w-md mx-auto leading-relaxed">
            Quản lý và theo dõi kết quả học tập của bạn một cách chuyên nghiệp
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 gap-4">
          {menuItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="card-professional cursor-pointer group"
                style={{ animationDelay: `${0.1 * index}s` }}
                onClick={() => navigate(item.path)}
              >
                <div className="flex items-center gap-4 md:gap-6 p-4 md:p-6">
                  <div className={`flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300`}>
                    <IconComponent size={20} className="md:w-7 md:h-7 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-bold text-black mb-1 md:mb-2 group-hover:text-gradient-professional transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0 text-gray-400 group-hover:text-gray-600 transition-colors duration-300">
                    <ChevronRight size={20} className="md:w-6 md:h-6" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Stats */}
        <div className="card-professional p-4 md:p-6">
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <TrendingUp size={12} className="md:w-4 md:h-4 text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gradient-professional">Thống kê nhanh</h3>
          </div>
          <div className="grid grid-cols-3 gap-2 md:gap-4">
            <div className="stats-card-professional text-center group">
              <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1 md:mb-2 group-hover:scale-110 transition-transform duration-300">8.2</div>
              <div className="text-xs md:text-sm font-medium text-gray-700">GPA hiện tại</div>
            </div>
            <div className="stats-card-professional text-center group">
              <div className="text-2xl md:text-3xl font-bold text-purple-600 mb-1 md:mb-2 group-hover:scale-110 transition-transform duration-300">45</div>
              <div className="text-xs md:text-sm font-medium text-gray-700">Tín chỉ</div>
            </div>
            <div className="stats-card-professional text-center group">
              <div className="text-2xl md:text-3xl font-bold text-emerald-600 mb-1 md:mb-2 group-hover:scale-110 transition-transform duration-300">12</div>
              <div className="text-xs md:text-sm font-medium text-gray-700">Học phần</div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default GradeCalc;
