import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FiBell, 
  FiUsers, 
  FiFileText, 
  FiMapPin, 
  FiActivity, 
  FiClock, 
  FiCheckSquare, 
  FiBookOpen, 
  FiChevronRight, 
  FiAlertTriangle 
} from 'react-icons/fi';

const FacultyDashboard = () => {
  const [faculty, setFaculty] = useState({
    name: "Dr. Rachana Mam",
    department: "Computer Science",
    classes: ["CS101", "CS202", "CS350"],
    notifications: 4,
    pendingTasks: 1
  });

  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const tasks = [
    { id: 1, title: "Take attendance for CS101", time: "10:00 AM", completed: false },
    { id: 2, title: "Upload lecture notes for CS202", time: "12:30 PM", completed: false },
    { id: 3, title: "Review student leave requests", time: "2:00 PM", completed: false }
  ];

  const quickActions = [
    { id: 1, title: "Take Attendance", icon: <FiUsers size={20} />, color: "bg-red-700" },
    { id: 2, title: "Add Notes", icon: <FiFileText size={20} />, color: "bg-red-800" },
    { id: 3, title: "Track Location", icon: <FiMapPin size={20} />, color: "bg-red-900" },
    { id: 4, title: "Student Stress Analysis", icon: <FiActivity size={20} />, color: "bg-red-700" }
  ];

  const attendanceAlerts = [
    { id: 1, student: "Alex Johnson", course: "CS101", status: "Attendance below 75%", severity: "high" },
    { id: 2, student: "Jamie Smith", course: "CS202", status: "Attendance below 85%", severity: "medium" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  function pendingTasks() {
    return tasks.filter(task => !task.completed).length;
  }

  return (
    // Main content area that works with existing sidebar
    <div className="flex-1 overflow-auto bg-gray-50 p-4 sm:p-6">
      {/* Welcome section */}
      <motion.section 
        className="bg-white rounded-lg shadow-md p-6 mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Welcome back, {faculty.name}</h2>
            <p className="text-gray-600">{currentDate}</p>
            <p className="text-gray-600">{faculty.department} Department</p>
          </div>
          <div className="mt-4 md:mt-0 bg-red-50 p-3 rounded-lg">
            <p className="text-red-800 font-medium flex items-center">
              <FiClock size={16} className="mr-2" />
              {pendingTasks()} pending tasks for today
            </p>
          </div>
        </div>
      </motion.section>

      {/* Quick actions */}
      <motion.section 
        className="mb-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickActions.map(action => (
            <motion.div 
              key={action.id} 
              className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition-shadow duration-200"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className={`${action.color} text-white rounded-full w-10 h-10 flex items-center justify-center mb-3`}>
                {action.icon}
              </div>
              <h4 className="font-medium text-gray-800">{action.title}</h4>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Today's Schedule */}
        <motion.section 
          className="lg:col-span-2 bg-white rounded-lg shadow-md p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Today's Schedule</h3>
            <button className="text-red-700 text-sm font-medium flex items-center">
              View All <FiChevronRight size={16} />
            </button>
          </div>
          <motion.div 
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {tasks.map(task => (
              <motion.div 
                key={task.id} 
                className="flex items-center space-x-3 p-3 border border-gray-100 rounded-lg hover:bg-red-50 transition-colors duration-200"
                variants={itemVariants}
              >
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-800">
                  <FiCheckSquare size={18} />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-800">{task.title}</h4>
                  <p className="text-sm text-gray-600 flex items-center">
                    <FiClock size={14} className="mr-1" /> {task.time}
                  </p>
                </div>
                <motion.button 
                  className="px-3 py-1 bg-red-700 text-white text-sm rounded-md hover:bg-red-800"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Attendance alerts */}
        <motion.section 
          className="bg-white rounded-lg shadow-md p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Attendance Alerts</h3>
            <button className="text-red-700 text-sm font-medium flex items-center">
              View All <FiChevronRight size={16} />
            </button>
          </div>
          <motion.div 
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5 }}
          >
            {attendanceAlerts.map(alert => (
              <motion.div 
                key={alert.id} 
                className="p-3 border-l-4 border-red-600 bg-red-50 rounded-r-lg"
                variants={itemVariants}
                whileHover={{ x: 5 }}
              >
                <div className="flex items-start">
                  <div className="mr-2 mt-1">
                    <FiAlertTriangle size={16} className="text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">{alert.student}</h4>
                    <p className="text-sm text-gray-600">{alert.course} - {alert.status}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Courses Today</h3>
            {faculty.classes.map((course, index) => (
              <motion.div 
                key={index} 
                className="flex items-center justify-between p-3 border-b border-gray-100 last:border-b-0"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + (index * 0.1) }}
                whileHover={{ backgroundColor: "rgba(254, 226, 226, 0.4)" }}
              >
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-800 mr-3">
                    <FiBookOpen size={16} />
                  </div>
                  <span className="font-medium">{course}</span>
                </div>
                <motion.button 
                  className="text-red-700 text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Details
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>

      {/* Student Stress Analysis */}
      <motion.section 
        className="mt-6 bg-white rounded-lg shadow-md p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Student Stress Analysis</h3>
          <button className="text-red-700 text-sm font-medium flex items-center">
            View Detailed Report <FiChevronRight size={16} />
          </button>
        </div>
        <motion.div 
          className="bg-red-50 p-4 rounded-lg"
          whileHover={{ scale: 1.01 }}
        >
          <p className="text-gray-700 mb-3">
            3 students in your classes are showing high stress levels based on their activity patterns and submissions.
          </p>
          <motion.button 
            className="px-4 py-2 bg-red-700 text-white text-sm rounded-md hover:bg-red-800"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Review Students
          </motion.button>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default FacultyDashboard;