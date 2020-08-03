---
title: 'Pagination in ReactJs'
date: 2020-08-01T00:00:00+5:30
draft: false
feature_image: reactjs.png
featured: false
published_at: 2020-08-01T00:00:00+5:30
updated_at: 2020-08-03T00:00:00+5:30
created_at: 2020-08-01T00:00:00+5:30
weight: 2
page: false
tags: 
    - reactjs
slug: 'pagination-in-reactjs'
author: 'prasanna'
comment: true
meta_description: 'Pagination in ReactJS Using react-js-pagination.'
id: 'devgroot-1'
---

# **Pagination in ReactJs**

Pagination is a feature of a web application to show a huge number of records into a number of pages. The pagination is implemented in a way to fetch only records that need to be displayed on a page to improve the performance of the overall application.

Here we are paginate our reactjs application using react-js-pagination

### 1.Create a New React App

first we need to create an Reactjs application using below command
> ###### _npx create-react-app reactjs-pagination_

move to created folder and run the created app using npm start. Check the running app on http://localhost:3000 on your browser.

> ###### _cd reactjs-pagination_
>
> ###### _npm start_

### 2. Install Package

we need to install three package ***Axios*** for Rest API, ***react-js-pagination*** for Pagination and ***bootstrap*** for style

> ###### _npm i axios_
>
> ###### _npm i react-js-pagination_
>
> ###### _npm i bootstrap@4_

### 3. Import Bootstrap 

we need to import bootstrap in index.js

> ###### _./index.js_

```javascript
import 'bootstrap/dist/css/bootstrap.min.css';
```

### 4. Create a Component

Create your own component.

> ###### _src/pagination/index.js_
>
> ###### _src/pagination/PaginationComponent.js_

### 5. Fetch Data Using Axios.

Create a function and fetch data using axios. Here i am using dummy data from  https://reqres.in/

> ###### _src/pagination/index.js_

```javascript
loadData = (page) =>{
    axios
        .get(`https://reqres.in/api/users?page=`+page)
        .then(res => {

            const data = res.data;
            console.log('data>>>>',data)
            this.setState({
                data: data.data,
                totalRecords : data.total ? data.total : 0,
                limit : data.per_page ? data.per_page : 6
            })
        });
}
```

### 6. Pass pagination properties to pagination Component.

> ###### _src/pagination/index.js_

Pass the pagination properties to the pagination component.

```javascript
<PaginationComponent
    getAllData={this.getPaginatedData} 
    totalRecords={totalRecords}
    itemsCountPerPage = {limit} />
```

We need to create the pagination Component.

### 6. Now Create a pagination Component.

Create a pagination component and pass the data in props.

> ###### _src/pagination/PaginationComponent.js_

```javascript
<div className="pagination-wrapper" style={{marginLeft:"50%"}}>
    <Pagination aria-label="Page navigation example"
        itemClass="page-item"
        linkClass="page-link"
        prevPageText='Prev'
        nextPageText='Next'
        firstPageText='First'
        lastPageText='Last'
        activePage={activePage}
        itemsCountPerPage={limit}            
        totalItemsCount={totalRecords}
        onChange={this.handlePageChange}
    />
</div>
```

### 7. Now create a function to handle onChange.

Now we need to create a function to handle onChange event. And pass the next page event in Props.

> ###### _src/pagination/PaginationComponent.js_

```javascript
//Handle Page Change
handlePageChange= (page)=> {
    this.setState({
        activePage: page
    });
    this.props.getAllData(page);
}
```

### 8. Handle the properties 

Handle the pagination event in the index.js and fetch the next page data.

> ###### _src/pagination/index.js_

```javascript
getPaginatedData = page =>{
    this.loadData(page);
}

<PaginationComponent
    getAllData={this.getPaginatedData} 
    totalRecords={totalRecords}
    itemsCountPerPage = {limit} />
```

### 9. Run the Application

Finally, run the application by typing http://localhost:3000 on the browser to load records with pagination.

Here the live example and git repository.

<iframe
     src="https://codesandbox.io/embed/reactjs-pagination-th07v?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="reactjs-pagination"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts">
</iframe>



Git Repository:

https://github.com/prasannakr1909/reactjs-pagination.git

