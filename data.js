/**
 * Created by nihkileshkshirsagar on 5/22/17.
 */

function userPorjects(){
    return {
        1:
         {
            'projectTitle': 'DISTRIBUTED FILE SYSTEM USING DHT (DISTRIBUTED HASH TABLES)',
            'projectDescription': 'It is space efficient and fault tolerant to use the commodity hardware to store the files ' +
            'using a distributed system rather than storing them on a centralised server. Here I have used Hash ' +
            'Tables on every node to keep a record of files present on the node.For inserting and lookup of the file ' +
            'in the system, we created a binary tree using a hash function, which will create a random binary tree for ' +
            'each files using the file name. For inserting the file we will get the root node of the tree using the hash ' +
            'function and insert the file at this node. For lookup, we will start the search at the leaf node moving towards ' +
            'the root node level by level and return the file wherever it is found. Whenever a file is requested for more ' +
            'than 5 times it is considered as an important (famous) file and is replicated to the child of the node. First, ' +
            'it is replicated at the child node of the root node and it goes on till the leaf nodes. This replication technique' +
            ' improves the performance of the system by reducing the time for frequently requested files.'
        },
        2:
        {
            'projectTitle': 'NETWORK DATA ANALYSIS USING MAPREDUCE (BIG DATA ANALYTICS)',
            'projectDescription' : 'Given a large amount (around 7.1 million entries) of log files consisting of log ' +
            'entries for server access in the form of IP address followed up with URL accessing the server, find the ' +
            'top fifteen IP addresses who have most frequently accessed the server. Because of the sheer size of the ' +
            'input map reduce proved out to be the best solution also the input data structure fit the requirement of ' +
            'key-value pair paradigm. The first step of the project was to read input from all files, pre-process it and ' +
            'divided the data into multiple mappers. The mappers registered every access by storing key as IP address and ' +
            'value as the user-name in the URL. In adherence to with multiple mappers, multiple reducers were created to ' +
            'aggregated the unique users and store a count against the IP address in the value. In the post-processing phase, ' +
            'the results from multiple reducers were combined in a map. Eventually, the map was sorted to get the top fifteen ' +
            'IP addresses.'
        },
        '3':
        {
            'projectTitle' : 'TCP CONGESTION CONTROL SIMULATION',
            'projectDescription': 'The internet as we know it today is built upon a packet switching network called TCP/IP ' +
            '(Transmission Control Protocol/Internet Protocol). The project simulated how TCP uses the sliding window, slow ' +
            'start, congestion avoidance, fast retransmit and fast recovery to create a reliable communication protocol along ' +
            'with congestion control in network adhering to fair share usage during transmission. Using UDP as the communication ' +
            'protocol and integrating features like acknowledgement and checksum (to maintain the integrity of packets) to ' +
            'simulate TCP. To achieve seamless sending and receiving of packets threads were created and synchronised.'
        },
        '4':
        {
            'projectTitle': 'DISTRIBUTED RIP (ROUTING INFORMATION PROTOCOL)',
            'projectDescription': 'The project is aimed to create a distributed routing information protocol by using UDP, ' +
            'thread synchronization and routing tables. Every node running in the network (impersonating a router) created its ' +
            'own routing table based on the neighbors directly connected and the routing table of the neighbor exchanged using ' +
            'sockets in UDP. Two separate threads are created on each node to send and receive routing tables from neighbors. ' +
            'Which demanded the use of thread safe resources to avoid deadlocks. Poisoned reverse method was used to prevent ' +
            'count-to-infinity problem.'
        },
        '5':
        {
            'projectTitle': 'IMAGE SEGMENTATION USING BIG DATA ANALYTICS',
            'projectDescription': 'The aim of the project was "Given any color image reduce it to any five colors of your choice".' +
            ' This can be achieved using both clustering and classification, here I choose Kmeans clustering algorithm ' +
            '(unsupervised learning) to create 5 clusters by providing initial centroids as RGB value for five colors of my' +
            ' choice. Later using Kmeans every pixel in the image was moved either of the clusters based on its distance from' +
            ' the centroid. I had use java and Weka for programming. A good amount of color closeness was achieved in the ' +
            'resulting image indicating the good accuracy of the algorithm.'
        },
        '6':
        {
            'projectTitle': 'Node advisor - search portal for node.js developers using Google page ranking algorithm',
            'projectDescription': 'It\'s a quick access to expeditiously growing node.js community. The project serves a ' +
            'platform for node.js developer to search and review the node modules. Providing other decisive elements for ' +
            'developer like graphical presentation of release trends, download trends, popularity, author activities. I ' +
            'had designed and developed the node.js modules wiki using the Google page ranking algorithm, node.js streams, ' +
            'mongodb and Loopback(express based) framework. Also programmed the module to add curated contents and reviews ' +
            'to the existing modules. Further I had implemented the modules index using ElasticSearch which served as a ' +
            'datasource for platform built using Angularjs.'
        },
        '7':
        {
            'projectTitle': 'Patients scribe',
            'projectDescription': 'The project was an iPad based application to maintain Electronic Health Records (EHR). ' +
            'The initial release targeted the patients suffering from Rheumatoid Arthritis. The application was developed ' +
            'using Java and SQLite DB providing an interactive interface for patients and doctors to facilitate the prognosis. ' +
            'Generating reports for historical data of patient was integral part of the project. My contribution also included ' +
            'programming a tool to track the application services on server and mail the statistics to the administrator on ' +
            'hourly basis.'
        },
        '8':
        {
            'projectTitle': 'CDFF - Cross platform mobile application for android and iOS.',
            'projectDescription': 'The project is Phonegap(Cordova) based hybrid application for android and iOS platforms which' +
            ' also used backbone.js, AdMob, MySQL and PHP. One of the most crucial aspect of the project was the huge user ' +
            'community. My work included designing and developing logger system used for the mobile application leveraging ' +
            'local storage on mobile devices. Further my work involved Admob (Ad sense -by Google) integration to application ' +
            'and programming the custom phonegap plugins for admob. I also had an opportunity to work on the user interface of ' +
            'the application and server side scripting for configuration and maintenance. I had developed the Windows mobile ' +
            'version of the application as well.'
        }
    }
}
