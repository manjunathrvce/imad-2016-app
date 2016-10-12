var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    'article-One':{
        title:'Article one - manju',
        heading:'article-one',
        date:'oct 12 , 2016',
        content:`<p>
                        This is the content of article one !!!..This is the content of article one !!!..This is the content of article one !!!..This is the content of article one !!!..This is the content of article one !!!..This is the content of article one !!!..
                    </p>
                    <p>
                        This is the content of article one !!!..This is the content of article one !!!..This is the content of article one !!!..This is the content of article one !!!..This is the content of article one !!!..This is the content of article one !!!..
                    </p>
                    <p>
                        This is the content of article one !!!..This is the content of article one !!!..This is the content of article one !!!..This is the content of article one !!!..This is the content of article one !!!..This is the content of article one !!!..
                    </p>`
    },
    'article-two':{
        title:'Article two - manju',
        heading:'article-two',
        date:'oct 14 , 2016',
        content:`<p>
                    This is the content of article two !!!..This is the content of article two !!!..This is the content of article two !!!..This is the content of article two !!!..This is the content of article two !!!..This is the content of article two !!!..
                </p>
                <p>
                
                    This is the content of article two !!!..This is the content of article two !!!..This is the content of article two !!!..This is the content of article two !!!..This is the content of article two !!!..This is the content of article two !!!..
                </p>
                <p>
                
                    This is the content of article two !!!..This is the content of article two !!!..This is the content of article two !!!..This is the content of article two !!!..This is the content of article two !!!..This is the content of article two !!!..
                </p>`
    
    },
    'article-three':{
        title:'Article three- manju',
        heading:'article-three',
        date:'oct 16 , 2016',
        content:`<p>
                this is the content of article three!!!...this is the content of article three!!!...this is the content of article three!!!...this is the content of article three!!!...this is the content of article three!!!...this is the content of article three!!!...
                </p>
                
                <p>
                this is the content of article three!!!...this is the content of article three!!!...this is the content of article three!!!...this is the content of article three!!!...this is the content of article three!!!...this is the content of article three!!!...
                </p>
                
                <p>
                this is the content of article three!!!...this is the content of article three!!!...this is the content of article three!!!...this is the content of article three!!!...this is the content of article three!!!...this is the content of article three!!!...
                </p>`
    
    }
};

function createTemplate(data){
    var heading=data.heading;
    var date=data.date;
    var title=data.title;
    var content=data.content;
    var htmlTemplate=`
    <html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" content="width-device-width,initial-scale-1"/>
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
                <div>
                    <a href="/">Home</a>
                    <hr/>
                </div>
                <h3>
                    ${heading} 
                </h3>
                <div>
                    ${date}
                </div>
                <div>
                    ${content}
                </div>
            </div>
        </body>
    </html>
    `;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function(req,res){
    // :articleName==article-one
    // articles[articlesName] == {} contents for article one
    var articleName=req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
