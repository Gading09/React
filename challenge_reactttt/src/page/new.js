import React, {Component} from "react";
import Header from "../component/header";
import axios from "axios";
import BeritaTerkini from "../component/berita_terkini";
import Berita from "../component/berita"
import "../style/css-final.css";
import "../style/bootstrap.min.css";

const apiKey = "02d1c2c457c14f739ed709c4bca05f3c"
const baseUrl = "https://newsapi.org/v2/"
const urlHeadline = baseUrl+"top-headlines?country=id&apikey="+apiKey;

class New extends Component{

    state = {
        listNews : [],
        isloading : true
    }
    requestNewsCategory = async () => {
        const paramCategory = await this.props.match.params.category;
        console.warn(paramCategory)
        const self = this;
        await axios
        .get(urlHeadline + "&category=" + paramCategory)
        .then(function (response) {
            self.setState({ listNews: response.data.articles, isLoading: false });
            // handle success
        })
        .catch(function (error) {
            self.setState({ isLoading: false });
            // handle error
            console.log(error);
        });
    };
    handleRouterCategory = async categoryName => {
        const category = categoryName;
        await this.props.history.push("/news-category/"+category);
        this.requestNewsCategory();
    }
      componentDidMount = () => {
          const self = this;
          axios
            .get(urlHeadline)
            .then(function(response){
                self.setState({ listNews: response.data.articles, isloading: false});
            })
            .catch(function(error){
                self.setState({ isloading:false})
            })
    }

    handleInputChange = async event => {
        let value = event.target.value;
        await this.setState({ search: value });
        this.searchNews(value);
      };
    
    searchNews = async keyword => {
        const self = this;
        if (keyword.length > 2) {
          try {
            const response = await axios.get(
              baseUrl + "everything?q=" + keyword + "&apiKey=" + apiKey
            );
            self.setState({ listNews: response.data.articles });
          } catch (error) {
            console.error(error);
          }
        }
      };

    render(){
        const { listNews, isloading} = this.state;
        const topHeadlines = listNews.filter(item => {
            if (item.content !== null && item.image !== null){
                return item;
            }
            return false;
        });

        const headlineNews = topHeadlines.map((item) => {
            return(
                <Berita
                author={item.author}
                img={item.urlToImage}
                title={item.title}
                description={item.description}
                publish={item.publishedAt}
                url={item.url}
                />
            );
        });
        
        return (
            <div>
                <Header
                doSearch={event => this.handleInputChange(event)}
                placeholder="ketik sesuatu"
                everything = {event => this.handleRouterCategory(event)}
                isCategoryNews = {true}
                category
                {...this.props}
                />
                <div class="container-fluid">
                    <div class="row berita">
                        <div class="col-md-1"></div>
                        <BeritaTerkini/>
                        <div className="col-md-7 habis">
                        {isloading ? <div style={{ textAlign:"center"}}>looding...</div> : headlineNews}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default New;