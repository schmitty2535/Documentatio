---
description: Quick Documentation for App/Service Modules
---

# Larry Documentation

## App Configuration

#### 1. Require app connection library

```javascript
 let appSocket = require('./app-Connection-Library');
```

**2. App socket configuration (must be declared after the appSocket)**

```javascript
appSocket.configure(Name_of_app, version, services_needed, config);
```

{% tabs %}
{% tab title="Name_of_app" %}
Name\_of\_app is a string
{% endtab %}

{% tab title="version" %}
version is a numerical value
{% endtab %}

{% tab title="services_needed" %}
services\_needed is an array of strings \['service1', 'service2' ...]
{% endtab %}

{% tab title="config" %}
config is user defined and may be an array, object, or a single string/numerical value
{% endtab %}
{% endtabs %}

#### 3. Send Message to Service

```javascript
appSocket.send('Service name', JSON.stringify({type:'myData', data:msg.data}));
```

## Service Configuration

#### 1. Require app connection library

```javascript
 let serviceSocket = require('./services-Connection-Library');
```

**2. App socket configuration (must be declared after the serviceSocket)**

```javascript
serviceSocket.configure(Name_of_service, version, service_capabilities, destination);
```

{% tabs %}
{% tab title="Name_of_service" %}
Name\_of\_service is a string
{% endtab %}

{% tab title="version" %}
version is a numerical value
{% endtab %}

{% tab title="service_capabilities" %}
String TBD
{% endtab %}

{% tab title="destination" %}
TBD
{% endtab %}
{% endtabs %}

#### 3. Send Message to App

```javascript
serviceSocket.send('App name', JSON.stringify({type:'myData', data:msg.data}));
```

