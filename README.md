# **Canteen 360° Monitoring System: Efficient Utilization of AI, Blockchain, YOLO, and Real-Time Data**

---

### **Problem Statement:**
University canteens struggle with **food safety compliance**, **inventory management**, and **sustainability goals**. Manual kitchen audits are time-consuming and prone to errors, making it difficult to ensure proper hygiene, inventory management, and compliance with safety standards. Additionally, students lack transparency regarding the food’s origin, freshness, and safety.

### **Solution:**
The **Canteen 360° Monitoring System** aims to **automate kitchen audits**, **track inventory** with **blockchain**, and provide students with **real-time insights** into the food they consume. Using **YOLO for video analysis**, **AI for risk prediction**, and **blockchain for audit transparency**, the system ensures food safety and operational efficiency in real-time. Students can engage with the system, checking the safety and freshness of their food, and can track its journey from source to plate.

---

### **Unique Proposition:**

1. **YOLO for Anomaly Detection**:
   - Monitors kitchen activities for potential safety violations in real-time.
   - Identifies risks like improper handling, hygiene breaches, and unsanitized conditions.
   
2. **Blockchain for Transparent Audits**:
   - Ensures tamper-proof tracking of commodities and equipment, recording every transaction related to inventory, equipment maintenance, and audit logs on a decentralized ledger.
   
3. **AI for Predictive Risk Management**:
   - Uses sensor data and historical records to predict food contamination risks and track the freshness of items, ensuring only fresh and safe food is served.
   
4. **Student Engagement**:
   - Allows students to check the **origin, freshness**, and **safety certifications** of the food they consume by scanning a **QR code**, providing full transparency of the food lifecycle.

---

### **Future Use Cases and Benefits:**

- **Scalability**: The system can be adapted to various canteen sizes and scaled to accommodate other dining institutions like hospitals, cafeterias, or restaurants.
- **Integration with Smart Contracts**: Implementing smart contracts on blockchain ensures automatic payments when inventory is updated or when certain safety conditions are met.
- **Predictive Analytics for Waste Reduction**: Using AI, it can forecast demand and manage inventory, minimizing food waste and reducing environmental impact.
- **AI-Driven Health Compliance**: The system could expand to incorporate other regulations like allergens or nutritional analysis, enhancing health compliance in the canteen.

---

### **Tech Stack Overview:**

1. **Frontend**: React.js (User interaction, Admin dashboard)
2. **Backend**: Node.js with Express (API development, communication with camera feeds and blockchain)
3. **Blockchain**: Hyperledger Fabric or Ethereum (for secure and tamper-proof audit tracking)
4. **Real-time Camera Feed**: YOLOv5/YOLOv10 (for kitchen anomaly detection) with OpenCV, Flask for serving video feeds
5. **Database**: MongoDB (storing user data, food inventory, and violation logs)
6. **Authentication**: JWT (for secure login sessions for admin and students)
7. **Cloud Storage**: AWS S3 for storing camera footage, logs, and audit reports

---

### **Detailed Workflow:**

#### **1. YOLO-Based Kitchen Monitoring**:
- **Input**: Real-time video feed from cameras in the kitchen.
- **Process**:
   - YOLO (You Only Look Once) detects anomalies like unsafe food handling or hygiene violations.
   - The system flags any unsafe actions, logs them, and notifies the admin with a video timestamp.
   - Admin can view live feeds or previous violation logs in the dashboard.
- **Output**: A detailed list of all detected violations with video proof.

#### **Advantages**:
   - Real-time monitoring ensures continuous compliance.
   - Immediate detection and reporting of unsafe practices prevent hazards.
   - Reduces the need for manual audits and inspections.

#### **Disadvantages**:
   - Requires constant monitoring and high computational power.
   - False positives may lead to unnecessary interventions.

#### **Future Scope**:
   - Can be expanded to detect other risks like fire hazards or unapproved staff in restricted areas.

---

#### **2. Blockchain-Based Audit Tracking**:
- **Input**: Inventory and equipment data such as deliveries, usage, and maintenance logs.
- **Process**:
   - Blockchain logs all transactions related to inventory or audits.
   - Each entry is immutable, ensuring transparency and security.
   - Admin can view a timeline of all activities with vehicle tracking for commodities (GPS-based real-time tracking).
- **Output**: A tamper-proof log of all inventory-related activities, audit reports, and equipment status.

#### **Advantages**:
   - Provides a transparent and immutable record of all transactions.
   - Increases trust and accountability in inventory management.
   - Reduces fraud or human errors in audits.

#### **Disadvantages**:
   - Blockchain networks can have high computational costs.
   - Complex to implement and requires regular maintenance.

#### **Future Scope**:
   - Smart contracts can automate inventory restocking or initiate audits based on predefined triggers.

---

#### **3. AI for Risk Prediction and Stock Management**:
- **Input**: Sensor data (temperature, humidity, freshness records), historical stock data.
- **Process**:
   - AI analyzes real-time data from sensors and past usage patterns to predict potential food safety issues or stock depletion.
   - Suggests ordering items when stocks are low or about to expire.
- **Output**: A dashboard displaying stock status and predicted expiration or contamination risks.

#### **Advantages**:
   - Reduces food waste by providing accurate demand predictions.
   - Prevents foodborne illness by detecting potential contamination risks in advance.

#### **Disadvantages**:
   - Sensor data inaccuracies could lead to false predictions.
   - Requires regular maintenance of sensors for accuracy.

#### **Future Scope**:
   - Could expand to suggest sustainable food sourcing based on seasonal availability or sustainability metrics.

---

#### **4. Student-Facing Transparency Portal**:
- **Input**: QR code scanning by students.
- **Process**:
   - The system retrieves all relevant information about the food item, including its origin, freshness score, and blockchain-verified audit.
   - Students can place orders or see how much of an item is in stock.
- **Output**: A simple interface showing food traceability and ordering options.

#### **Advantages**:
   - Empowers students with information about their food, building trust.
   - Encourages more informed and sustainable food choices.

#### **Disadvantages**:
   - Requires high-quality data and frequent updates to be effective.
   - Some students may not engage with the system as expected.

#### **Future Scope**:
   - Expand to offer students health recommendations based on their dietary preferences or past orders.

---

### **Proposed Workflow Diagram**:

```plaintext
+-------------------+                  +-------------------+
|                   |                  |                   |
|   Student Login   |                  |    Admin Login    |
|                   |                  |                   |
+-------------------+                  +-------------------+
          |                                        |
+-------------------+                      +-------------------+
|                   |                      |                   |
|   Food Selection  |                      |    Dashboard      |
|                   |                      |                   |
+-------------------+                      +-------------------+
          |                                        |
+-------------------+                      +-------------------+
|                   |                      |                   |
|   Blockchain Audit|                      |  Camera Monitoring|
|                   |                      |    (YOLO)         |
+-------------------+                      +-------------------+
          |                                        |
+-------------------+                      +-------------------+
|                   |                      |                   |
| Food Traceability |                      |Violation Alerts/Logs|
|     AI-based      |                      |                   |
+-------------------+                      +-------------------+
          |                                        |
    Students Track                            Admin Take Action
    Food Origin & Order                       based on Alerts
```

### **Efficient Implementation Plan**:

1. **Sprint 1 (1 Day)**:
   - Setup basic frontend with login pages for admin and student.
   - Implement YOLO-based camera feed using Flask for real-time anomaly detection.
   - Deploy blockchain for auditing and inventory logging.
   
2. **Sprint 2 (1 Day)**:
   - Build student page for viewing items and checking traceability.
   - Connect backend API for item ordering and real-time stock checks.
   - Add AI-powered risk predictions on the admin side.
   
3. **Sprint 3 (1 Day)**:
   - Final integration of the YOLO system with violation logs.
   - Connect blockchain data to admin dashboard for real-time audit tracking.
   - Final tests, deployment, and presentation.

### **Conclusion**:
The **Canteen 360° Monitoring System** leverages the power of **AI**, **Blockchain**, and **YOLO** to ensure food safety, sustainability, and transparency. By using this tech stack, universities can create a safer, more efficient, and engaging canteen experience, which could be the blueprint for the future of institutional dining.

### **Tech Stack:**
1. **Frontend**: React.js
2. **Backend**: Node.js with Express
3. **Database**: MongoDB (for storing users, items, violations)
4. **Blockchain**: Hyperledger Fabric or Ethereum (for audit tracking)
5. **Real-time Camera Feed**: YOLOv5/v10 for kitchen monitoring (Python with OpenCV and Flask for integration)
6. **Authentication**: JWT (JSON Web Tokens) for user sessions
7. **API**: RESTful APIs using Express.js for student interaction

---

### **Work Distribution:**

1. **Person 1: Home Page & Login**  
   - **Responsibilities**: 
     - Develop the home page and login page (React.js).
     - Implement user authentication (JWT).
     - Basic routing between login and admin/student pages.
   - **Tasks**:
     - Create a simple login form (admin and student roles).
     - Redirect users based on role after login.
   - **Code Snippet**:

   ```jsx
   // HomePage.jsx
   import React from 'react';
   import { Link } from 'react-router-dom';

   const HomePage = () => (
     <div>
       <h1>Canteen 360° Monitoring System</h1>
       <p>This project ensures food safety and sustainability using AI, Blockchain, and more.</p>
       <Link to="/login">Login</Link>
       <h2>Team</h2>
       <p>Team Members: [List of members]</p>
       <h2>GitHub Link</h2>
       <a href="https://github.com/example">View GitHub Repository</a>
     </div>
   );

   export default HomePage;

   // LoginPage.jsx
   import React, { useState } from 'react';
   import { useNavigate } from 'react-router-dom';

   const LoginPage = () => {
     const [username, setUsername] = useState('');
     const [password, setPassword] = useState('');
     const navigate = useNavigate();

     const handleLogin = () => {
       // Simple admin/student check, replace with actual auth logic later
       if (username === 'admin' && password === 'admin123') {
         navigate('/admin');
       } else if (username === 'student' && password === 'student123') {
         navigate('/student');
       } else {
         alert('Invalid credentials');
       }
     };

     return (
       <div>
         <h1>Login</h1>
         <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
         <button onClick={handleLogin}>Login</button>
       </div>
     );
   };

   export default LoginPage;
   ```

---

2. **Person 2: Camera Feed and Alerts (YOLO-based)**
   - **Responsibilities**: 
     - Implement YOLOv5/v10 for real-time monitoring of kitchen activities.
     - Integrate camera feed and alert system using Flask and OpenCV.
     - Display violations in admin dashboard.
   - **Tasks**:
     - Setup YOLO for detecting kitchen anomalies (e.g., unsanitized handling, safety violations).
     - Send detected violations to the backend and display in admin dashboard.
   - **Code Snippet**:

   ```python
   # camera_feed.py (Flask + OpenCV for YOLO)
   from flask import Flask, render_template, Response
   import cv2
   import yolov5

   app = Flask(__name__)
   model = yolov5.load('yolov5s.pt')  # Load your YOLO model

   def generate_frames():
       camera = cv2.VideoCapture(0)  # Assuming webcam for testing
       while True:
           success, frame = camera.read()
           if not success:
               break
           else:
               results = model(frame)
               frame = results.render()[0]  # Render detections on the frame
               ret, buffer = cv2.imencode('.jpg', frame)
               frame = buffer.tobytes()
               yield (b'--frame\r\n'
                      b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

   @app.route('/video_feed')
   def video_feed():
       return Response(generate_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')

   if __name__ == '__main__':
       app.run(debug=True)
   ```

---

3. **Person 3: Blockchain Audit Tracking**
   - **Responsibilities**: 
     - Implement blockchain-based tracking of commodities and equipment using Hyperledger or Ethereum.
     - Ensure live tracking of kitchen supplies and equipment.
   - **Tasks**:
     - Set up a blockchain network to track inventory and audits.
     - Display live tracking info on the admin page.
   - **Code Snippet** (using Hyperledger):

   ```javascript
   // blockchain_audit.js (Hyperledger SDK example)
   const { Gateway, Wallets } = require('fabric-network');
   const path = require('path');
   const fs = require('fs');

   async function trackAudit() {
     const ccpPath = path.resolve(__dirname, '..', 'connection.json');
     const ccp = JSON.parse(fs.readFileSync(ccpPath, 'utf8'));

     const walletPath = path.join(process.cwd(), 'wallet');
     const wallet = await Wallets.newFileSystemWallet(walletPath);

     const gateway = new Gateway();
     await gateway.connect(ccp, { wallet, identity: 'admin', discovery: { enabled: true, asLocalhost: true } });

     const network = await gateway.getNetwork('mychannel');
     const contract = network.getContract('auditContract');

     const result = await contract.evaluateTransaction('queryAllAudits');
     console.log(`Audit tracking: ${result.toString()}`);
   }

   trackAudit();
   ```

---

4. **Person 4: API Endpoints & Student Web Page**
   - **Responsibilities**: 
     - Build REST API for managing food items and their availability.
     - Create student interface to view available items and order based on stock.
   - **Tasks**:
     - Implement API for students to fetch items, view traceability info, and place orders.
     - Display available items and integrate ordering functionality on student page.
   - **Code Snippet**:

   ```javascript
   // server.js (API Endpoints using Express.js)
   const express = require('express');
   const app = express();
   const items = [
     { id: 1, name: 'Pasta', stock: 10, origin: 'Farm A' },
     { id: 2, name: 'Salad', stock: 5, origin: 'Farm B' },
   ];

   app.use(express.json());

   app.get('/items', (req, res) => {
     res.json(items);
   });

   app.post('/order', (req, res) => {
     const { id } = req.body;
     const item = items.find(item => item.id === id);
     if (item && item.stock > 0) {
       item.stock--;
       res.json({ message: 'Order placed', item });
     } else {
       res.status(400).json({ message: 'Out of stock' });
     }
   });

   app.listen(3000, () => {
     console.log('Server running on port 3000');
   });
   ```

   **Student Page** (React):
   ```jsx
   // StudentPage.jsx
   import React, { useEffect, useState } from 'react';

   const StudentPage = () => {
     const [items, setItems] = useState([]);

     useEffect(() => {
       fetch('/items')
         .then(res => res.json())
         .then(data => setItems(data));
     }, []);

     const handleOrder = (id) => {
       fetch('/order', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ id }),
       })
         .then(res => res.json())
         .then(data => alert(data.message));
     };

     return (
       <div>
         <h1>Available Items</h1>
         <ul>
           {items.map(item => (
             <li key={item.id}>
               {item.name} - {item.stock} in stock
               <button onClick={() => handleOrder(item.id)}>Order</button>
             </li>
           ))}
         </ul>
       </div>
     );
   };

   export default StudentPage;
   ```

---

### **Workflow**:
- **Person 1**: Create the homepage, login page, and routing logic.
- **Person 2**: Set up YOLO and camera feed with violation detection.
- **Person 3**: Implement blockchain-based audit tracking and integrate with the admin panel.
- **Person 4**: Create API endpoints for item management and build the student-facing page for ordering and viewing food details.

This division of work allows the team to build the system within a day by focusing on specific components.
