import React, { useState } from 'react';
import MainLayout from '../../components/Layout/MainLayout';
import { Card, Button } from '../../components/Common';

interface Course {
  id: string;
  name: string;
  credits: number;
  semester: string;
  status: 'enrolled' | 'completed' | 'pending';
}

const Courses: React.FC = () => {
  const [courses] = useState<Course[]>([
    { id: '1', name: 'Lập trình cơ bản', credits: 3, semester: 'HK1', status: 'completed' },
    { id: '2', name: 'Cơ sở dữ liệu', credits: 3, semester: 'HK1', status: 'completed' },
    { id: '3', name: 'Phát triển web', credits: 4, semester: 'HK2', status: 'enrolled' },
    { id: '4', name: 'Lập trình di động', credits: 3, semester: 'HK2', status: 'pending' },
  ]);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return 'status-completed';
      case 'enrolled':
        return 'status-enrolled';
      case 'pending':
        return 'status-pending';
      default:
        return 'status-pending';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return '✓ Hoàn thành';
      case 'enrolled':
        return '⏱ Đang học';
      case 'pending':
        return '⏳ Chờ xử lý';
      default:
        return status;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return '🎓';
      case 'enrolled':
        return '📖';
      case 'pending':
        return '⏳';
      default:
        return '📚';
    }
  };

  const completedCredits = courses
    .filter((c) => c.status === 'completed')
    .reduce((sum, c) => sum + c.credits, 0);
  const enrolledCredits = courses
    .filter((c) => c.status === 'enrolled')
    .reduce((sum, c) => sum + c.credits, 0);
  const totalCredits = courses.reduce((sum, c) => sum + c.credits, 0);

  return (
    <MainLayout title="Học phần">
      <div className="space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-4">
          <Card variant="elevated" className="text-center animate-slide-in-left">
            <div className="text-4xl mb-3">🎓</div>
            <p className="text-3xl font-bold text-green-600">{completedCredits}</p>
            <p className="text-sm text-gray-600 mt-2 font-medium">Hoàn thành</p>
            <div className="w-full bg-gray-200 rounded-full h-1 mt-3">
              <div className="bg-gradient-to-r from-green-400 to-green-500 h-1 rounded-full animate-pulse" style={{ width: `${(completedCredits / totalCredits * 100)}%` }}></div>
            </div>
          </Card>
          <Card variant="elevated" className="text-center animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
            <div className="text-4xl mb-3">📖</div>
            <p className="text-3xl font-bold text-blue-600">{enrolledCredits}</p>
            <p className="text-sm text-gray-600 mt-2 font-medium">Đang học</p>
            <div className="w-full bg-gray-200 rounded-full h-1 mt-3">
              <div className="bg-gradient-to-r from-blue-400 to-blue-500 h-1 rounded-full animate-pulse" style={{ width: `${(enrolledCredits / totalCredits * 100)}%` }}></div>
            </div>
          </Card>
          <Card variant="elevated" className="text-center animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
            <div className="text-4xl mb-3">📚</div>
            <p className="text-3xl font-bold text-purple-600">{totalCredits}</p>
            <p className="text-sm text-gray-600 mt-2 font-medium">Tổng tín chỉ</p>
            <div className="w-full bg-gray-200 rounded-full h-1 mt-3">
              <div className="bg-gradient-to-r from-purple-400 to-purple-500 h-1 rounded-full animate-pulse" style={{ width: '100%' }}></div>
            </div>
          </Card>
        </div>

        {/* Progress Bar */}
        <Card variant="glass" className="animate-fade-in-up">
          <div className="mb-4">
            <p className="text-lg font-semibold text-gray-800 mb-3">Tiến độ học tập</p>
            <div className="progress-bar">
              <div
                className="h-3 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${(completedCredits / totalCredits * 100) || 0}%` }}
              />
            </div>
            <p className="text-sm text-gray-600 mt-4 text-center">
              <span className="font-bold text-gradient">{completedCredits}/{totalCredits}</span> tín chỉ ({Math.round((completedCredits / totalCredits * 100) || 0)}%)
            </p>
          </div>
        </Card>

        {/* Courses List */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <h3 className="font-bold text-2xl mb-6 flex items-center gap-3 text-gradient">
            📚 Danh sách học phần
          </h3>
          <div className="space-y-4">
            {courses.map((course, index) => (
              <Card
                key={course.id}
                variant="elevated"
                className={`${getStatusBadge(course.status)} animate-slide-in-right`}
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">{getStatusIcon(course.status)}</span>
                      <h4 className="font-bold text-xl">{course.name}</h4>
                    </div>
                    <div className="flex gap-3 mt-3">
                      <span className="bg-white bg-opacity-60 px-3 py-1 rounded-full text-sm font-medium">
                        {course.credits} tín chỉ
                      </span>
                      <span className="bg-white bg-opacity-60 px-3 py-1 rounded-full text-sm font-medium">
                        {course.semester}
                      </span>
                    </div>
                  </div>
                  <span className="font-bold text-base whitespace-nowrap ml-4 px-3 py-2 bg-white bg-opacity-60 rounded-full">
                    {getStatusText(course.status)}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <Button variant="gradient-secondary" className="w-full text-lg font-bold animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          📝 Đăng ký học phần
        </Button>
      </div>
    </MainLayout>
  );
};

export default Courses;
