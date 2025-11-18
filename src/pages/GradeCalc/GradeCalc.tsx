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
      <div className="space-y-6">
        {/* Header Card */}
        <div className="card-professional p-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-lg">
            <Calculator size={32} className="text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gradient-professional mb-3">
            Công cụ tính điểm
          </h1>
          <p className="text-neutral-gray-800 text-lg max-w-md mx-auto leading-relaxed">
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
                <div className="flex items-center gap-6 p-6">
                  <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300`}>
                    <IconComponent size={28} className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-neutral-gray-900 mb-2 group-hover:text-gradient-professional transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-neutral-gray-600 text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0 text-neutral-gray-400 group-hover:text-neutral-gray-600 transition-colors duration-300">
                    <ChevronRight size={24} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Stats */}
        <div className="card-professional p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <TrendingUp size={16} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-gradient-professional">Thống kê nhanh</h3>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="stats-card-professional text-center group">
              <div className="text-3xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">8.2</div>
              <div className="text-sm font-medium text-neutral-gray-600">GPA hiện tại</div>
            </div>
            <div className="stats-card-professional text-center group">
              <div className="text-3xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform duration-300">45</div>
              <div className="text-sm font-medium text-neutral-gray-600">Tín chỉ</div>
            </div>
            <div className="stats-card-professional text-center group">
              <div className="text-3xl font-bold text-emerald-600 mb-2 group-hover:scale-110 transition-transform duration-300">12</div>
              <div className="text-sm font-medium text-neutral-gray-600">Học phần</div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default GradeCalc;
