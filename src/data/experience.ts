export const experience = [
  {
    name: 'Check24 GmbH',
    type: 'work',
    title: 'Data Scientist - ML',
    techStack: 'Python, SQL, AWS, Git, Airflow, Prompt Engineering',
    summaryPoints: [
      'Owned end-to-end ML for automated email classification; models process ~15 000 inbound emails/week, replacing manual triage for the insurance vertical.',
      'Designed a production ML pipeline that maps unstructured documents to product category and intent (e.g. damage type), cutting average routing time for claims processing.',
      'Boosted precision on 5 compliance-sensitive document types by layering rule-based validation on top of ML predictions, reducing false-positive escalations.',
    ],
    dateRange: '10.2025 – 03.2026',
  },
  {
    name: 'Schaeffler Hub for Advanced Research · KIT',
    type: 'work',
    title: 'Machine Learning Researcher',
    techStack: 'Python, PyTorch, OpenCV, CUDA, ROS 2, Docker, Shell, GitLab CI/CD',
    summaryPoints: [
      'Accelerated perception inference from ~1 FPS to 187 FPS via TensorRT + CUDA kernel profiling, a 99.98 % latency reduction enabling real-time road-condition prediction.',
      'Built a sensor fusion framework in ROS 2 (Python + C++) that synchronizes camera, IMU, and LiDAR streams; achieved 91 % classification accuracy on embedded hardware.',
      'Containerized the best-performing model as a Docker image in Harbor registry, enabling one-command deployment across edge devices.',
      'Halved GPU memory footprint through INT8 quantization, layer-wise profiling, and mixed-precision tuning, critical for running on NVIDIA Jetson.',
    ],
    dateRange: '02.2024 – 01.2025',
  },
  {
    name: 'Schaeffler AG',
    type: 'work',
    title: 'R&D E-Mobility Systems (Working Student)',
    techStack: 'Python, TensorFlow, Scikit-Learn, Pandas, PowerBI, GitLab CI/CD',
    summaryPoints: [
      'Developed an anomaly detection model on tabular sensor data for predictive maintenance of e-mobility drivetrains, reducing false-positive alerts by 18 %.',
      'Validated results with hypothesis testing (p < 0.05) and projected €50 K/year in savings with 95 % confidence intervals. Presented ROI case to senior leadership.',
      'Built interactive PowerBI dashboards that tracked anomaly trends across assembly lines and became a daily tool for shift managers.',
    ],
    dateRange: '08.2023 – 01.2024',
  },
  {
    name: 'Stellantis',
    type: 'work',
    title: 'Machine Learning Engineer',
    techStack: 'Python, Docker, Jenkins, AWS, Shell, Git',
    summaryPoints: [
      'Shipped a CAN-bus fault detection system covering 500+ vehicles with 95 % prediction accuracy, integrated into the telematics backend.',
      'Profiled and optimized embedded Linux inference pipelines, resolved memory leaks and reduced cold-start latency in production.',
      'Designed CI/CD workflows with Docker + Jenkins for cloud deployment; mentored 2 junior engineers on testing and deployment best practices.',
    ],
    dateRange: '09.2021 – 09.2022',
  },
  {
    name: 'FAU Erlangen-Nürnberg',
    type: 'education',
    title: 'M.Sc. Artificial Intelligence',
    techStack: '',
    summaryPoints: [
      'Specialisation: Electromobility · GPA 1.6 (German scale)',
      'Coursework: ML for Time Series, Explainable ML, AI-driven Data Analysis, AI in Healthcare',
    ],
    dateRange: '10.2022 – 02.2025',
  },
  {
    name: 'JNTU Anantapur',
    type: 'education',
    title: 'B.Tech. Mechanical Engineering',
    techStack: '',
    summaryPoints: [
      'Top 5 % of cohort · GPA 1.7 (German-equivalent)',
      'Key modules: Automation & Robotics, Exploratory Data Analysis, Operations Research',
    ],
    dateRange: '07.2017 – 07.2021',
  },
];