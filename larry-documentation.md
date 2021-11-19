---
description: Quick Documentation for App/Service Modules
---

# Larry Documentation

## App Configuration

#### 1. Require app connection library

```javascript
 let appSocket = require('./app-Connection-Library');
```

{% file src=".gitbook/assets/app-Connection-Library.js" %}
app-Connection-Library Javascript File
{% endfile %}

**2. App socket configuration (must be declared after the appSocket)**

```javascript
appSocket.configure(Name_of_app, version, services_needed, config);
```

#### 3. Send Message to Service

```javascript
appSocket.send('Service name', JSON.stringify({type:'myData', data:msg.data}));
```

## Service Configuration

#### 1. Require app connection library

```javascript
 let serviceSocket = require('./services-Connection-Library');
```

{% file src=".gitbook/assets/service-Connection-Library.js" %}
services-Connection-Library Javascript File
{% endfile %}

**2. App socket configuration (must be declared after the serviceSocket)**

```javascript
serviceSocket.configure(Name_of_service, version, service_capabilities, destination)
```

#### 3. Send Message to App

```javascript
serviceSocket.send('App name', JSON.stringify({type:'myData', data:msg.data}));
```

