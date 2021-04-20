import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    return (
        <footer className="footer" id="footer">
            <div className="container">
                <div className="row">             
                    <div className="col-12 col-lg-3 col-md-4 links">
                    <ul className="list-unstyled links">
                        {isAuthenticated ? (
                            <>
                                <li>
                                    <Link className="footer-link" to="/">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link className="footer-link" to="/buy">
                                        Buy
                                    </Link>
                                </li>
                                <li>
                                    <Link className="footer-link" to="/sell">
                                        Sell
                                    </Link>
                                </li>
                                <li>
                                    <Link className="footer-link" to="/profile">
                                        Profile
                                    </Link>
                                </li>
                            </>
                        ):(
                            <>
                                <li>
                                    <Link className="footer-link" to="/auth/register">
                                        Register
                                    </Link>
                                </li>
                                <li>
                                    <Link className="footer-link" to="/auth/login">
                                        Login
                                    </Link>
                                </li>
                            </>
                        )}
                        </ul>
                    </div>
                    <div className="col-lg-5 col-md-8 align-self-center">
                        <h3>We Grow</h3>
                        <Link to='/'>
						<img className="weGrow" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAS0AAACnCAMAAABzYfrWAAABsFBMVEX////+/v7HycvExsg/MlzuMUjZLVjRK17ULFw/M13WLFo+L1jMKmLJKmTEKWjzgzTeLlTpMEzsMUnBKGrLKmPFKWfhLlLmL07iL1HVLFvqMEtYMWCFLWVmMGHuN0a9KGtMMl6tKmmlKmiOLGZ9LmSaK2fy8/OrKmlbMWBuL2K1KWqVLGbd3t+ILWVOMl9jMGHvREPwTkHo6ervQ0TwVT/wWj7xZjvyazr6z7fR09T76+7yczjzfTXyfCHstcO+AFzrETX63eF7Flr2t77Gu8f60tb73NX3sYjyeBTfUnHYAD/YDknoj6Hsp7X41tvfEkLYT3TqXnPklqrugo/ZY4TzoKqVjZ7JAFOurbRYTGksEEY0HEqjnavoFDtlW3UmAEHUbpGAe43qbH/OaJDdn7dxa4LPiqelAVyxWYS5dpbFla3QscC8pbami6KKaYh3UHdMH1fpSWDwkJxcG1ZOBVByDlZjQWuvZIu1e5ng0NqKSXT5xcftFSs8D0+kUHzDQnbSeo7wVVrybGzvPCrxZFH3r6T1kHzwVSXxaCH1nGT0kYP5xqrzhVn0jEb3tY/859r4n3+dAAAOwUlEQVR4nO2c/UMTRxrHdxICiFgxvoDY0ta2W6uprWlVkgpJgPBiPFJFpErTWmylp2gFa1sO7rTaFjnP8i/fzG52d16e2Z3NLoQN+/0Bkt3ZeZ755JlnZycz0bQWk64324MoKZdrtgcRkp5MZpvtQ3SUSyQSzfYhMtKTiUQy02wvoqIMppVIxoleTQlDcaJXEumIibgvKipjxlbcF5WUsNVsTyKgekckwRVa6kJ1hVXf7lGW0DJ7Y1hjVAtTC/LKGQk+GWLqohi1HC4CCZljLuNVYBFCdkdsMVwoaYwdkJW9AreuDsnGFdzFXSSc5I3+l0mGdGM08Dhx1VrBhZN8kvy3givwjZGjFYXgyiv7iGnlrBeh4LJoWSOICNCanlItmUlajzw5e9gVqIF1WvZwKwK0ypenFL3M2DOBdqIPlurtnhid2CpXerrySiUdWtSoPhFg3BXBLI9p9VTKKiUxLd15bT8ENT6q50BFABbuiT097ZUrCiVpWlrOwdX4/A1DKwqhZdDCuKa8eyNDi8bVeG+kAEUCllau9hBc7ZV/eJXMMrQoXAHCy2YUDVjatEGL4PIKL44Wg6vh8DKGD9GZsilVj9Vx4ezl6rPO0aJxBRh6RWp6K189dqxOq729a9itqPDNK4MrmYlMmxtXvtpH4ap0uAwmcsJoIUPh2hO8ULWPwtXVVflSyisrZvMsjQvzyrX69xu9vSwuOS8EPEbrCYYXfpdt6QDrw7QYXMePt3fA+SsHTWllWFwkwLKtG2FXDxnBZfAyg+t4Z+dc5zVgPKEnoQr48CLAEpkWDbGZftIX+3qmaFwdHXNz18UOCQ8TEB9eBrBkIpdxWRsX0TvCbLqX4KqiHgdXJ8ZFgF0psWWRpPVieFnICLNMVtd1elSlJ27s37+dbdo+jdZ6Ca4qylecTG/iwsAOXCt5V4GVhXlZzEzhN7nEV9/dvHVr/tbX29ysbVKpdsigVdJKl51MX8fV3d2NgU2r1JNJSnmZymFSN76Zn5/fj/VtRFeeoOIhgqu6hsFVeFyYVveRI3OF28PecxTIhVcukfz6u5t1UoZ2oGXbot5+g9YsfpknuYvHdeTIgQMHCoXD3sRQRuyPJKK+/u6bNgoU1vyNnWjZdmgmRYLr0AJ5jaYqAC5M68DRo0cLhcKd76fdkWXtZ0eMCXO68QMTUZZuRXbF3Gitn+Cqmu+uXKaGXSyuN944fPhwoXD6zt3h1bx0bIBwwv8Kh9MPN/eZnNra2gRake2IWqnYT3DV6je/6Z4KM47gcL2NdXoR6+TJH//52737RKurq2NES0sPHjz86ZdTj7DOnn2nrW3fvjZTHKvodkRNS6UJrvSs9X7lMogL90USXITW6dPvfvjhyZMnP8A6M2LoCdZjrLc++eTUqRMnTpx95x05ruh2RE1bMHD1L9sHSlMVGNcbNq53LVxnzrz33nsfv/nm+1gfYb1Vx3XWFVcTWxtUo8U0wVWjxqFrXRV+HCHiMoPLHZdNi8Y1H9GhqSFUTBFc6RX64HBnRRxH2LhOB8L1baR3v1xNkb7Yn2YfdMu4Pyrj+pjHdcLE1Qbh+qZJ7QxHa0UDV22UO56/0lUxJiSEcQSA600Gl1umvzXWlFaGJkyL4OoVz5SfdbUfB8cR1I3xDIXrIwOX641xPpqTNbZWaimSuoTgMjR9pWNujhlHULhOMrj41AXiivJgy1DeCK50+pDs/PCz7rm5OeHGeNpjHPEIwhXtHE+0MGDgqs3Ki+TL165jZN2YFz/sEm+MZJz686mHSw9O1G+MFK5o53ii0nodl8c0gz49fO32U/J8XSgcZgf1BJc5qH//o4cPlsaMqeRfxHHErRbY9rIwYOBKLSiVRvnp8vD339+9e+fOj3X9ih8a7y3hR8a87iTxsUfCOGL/ze1qwg4qv27iKq6FWespcdg1H/Hhg6nZIqGFoyvE2/vYY+HGuL8tvOqbqQEjuFKpq+FVCYwj5r8Kr/pmqmz1Rc9lb6paAqZvojz7wGilaEZXUe07MU/pj8Xpm1YJLazf650xHU7qeiDOR7R5ZC3A8DY9JQW3lB+o41r2Luut1Sfi9I3XDREBgk9wl3DXCxUKhT0sAXUJm3TxGNXAVVMbdbnrX+L0zf59HtdI2+CFi61AqFEs62HJ9VpLa+v11MVMDDakpSfi9I3nMN4HLbgVIMpGaYlVc+6OWrhcHhiVpI+I0zdnPZ8Q/dBiehdXAV+hJpRVosWTE/y1cYGTN+r69WNx5vnfymsfRNfYI160ZHkMCRXDliR5TnQ0HFz3R4DpG/V5LS9aGt8i+rhvWi5HrDcSWGTaOTiu/AfAbNcj9Vt0YFoIeMeXVTpSfyeDhe+MA/VBfeO4/gNMDv7s43E6UE90yrLv+LJKR2zg0o8aPS+auBpN9fegudSHPipQySbutJBdSzBaYnyKWjEnBxscSKwuAt+aPfYzvyyhxYg5w14YJi1xVCqqPFAjuBoapur8t2aE1uMlP1Uo0GLPsBciuguGQ8vD3xnji43asv+l7z9+CHwN9JOvKjxp8We4C8OkJb8f0iqna6l0OpUuebaN1d1F8Wug95/4gw7Tcl6p0LIO7wwtMp1aS6f93hrvLwLfmj3xOb3sRgtMw3wxKgJ3ipaWXyim0v21GYWiVs33F4HlJCO/qddgOyg9sltp4bHX1WKqP7Ws9hMIGsqMwYuV1C5nHZQfYd0HaXE9F75S8Yg6LZy+louyr/w5kRXgb0Orb0YUYbMOuhwRAO0aWpjX1SIeSniV18lmn6fQ6puR+8qmaAddjiC6ATAtjTmvQWVVj/ijpWnTC7Va1fWLRj1HdhY8hVbfjNzzYUnmH5SroHukSEseh6pH/NLC+X6mVlyQdSi9vqngDrOK11p986svQ45/osdso6kuxz0TSetCwnkvS+BFKi2Y7QfHEnomZ25Yyd05AC16PuPTTstobXmZHaoiElX1vRe520fARc+tuw3WU/mZGas7IiOonG09t7uhdZaLvm+HLSU0WkZIz2YSSXbD2HVwFe/iarP93SYh3TvBIB1zyiWT4s666x3QKt6WhWV2rVwuk82Sfb06skTe4GOZTK6+ixXa3foluOh50f9AK1Iy0zYol02tYx2dHcAq3oLrz7y0iHBWyvFZyVX3jx+HNk/tCVimkCQ/icrdq4Cbp/YQLFPk3peTJisjYSUSzyrg5qmC0s711hNhhvM/kM8S+J7wJbzXrOB3xlViW/JgIj6dOKehwkKtXmbkR5Vdr98ezbumUU+pHd6zfjScQSnQWk9acAU8ce9CMtSNa/RyD7QJu/tpOBaEyRf+hHhAaLH1nws56B3PUGKrQaGFqvXLSvXfvqn/3MbtcOqXO+qbluZKC6w2vJgyVO7tPWb/5CC1q3gutFW+0l6wM7TCxLVS43/lrI4rvJuhNHP4p6VJQbDTZgrGG9B0X7VX+JUzjGvuergzNLDHO0FLaty30ErR+DUX4UfhKteCVg2aE+/4Qgn4TICeKDXuV2vpWr9Bi8PV3hnOKMuStBk7krekxnwpf7Vo/tyGiesY9eOyQaoVJbm1wwcQ858v6DXeEo/KjfuSuXtKxFVpD/1ZRz3Lu4zavUenGnhtGFl+dMBcZ5nmcB27HHJgmZL4CzUBvhtIbhIQVFXjyir/TrYfALiqU+FmrBZQ6fn6Z58NCLj6+qp9AZeLt55Kz198+ulnAK5qNehOhJbT+PMX5z41aFG4+skvK9Vm9vaXYKIIq3OEFocrnZJ/3b9XtfbHi8/PnQNwuSyN2KPS/zy/8TkWjcukVSvGfZDV+F8bG+fPnwdwFQdm9+pyEFj6nxc2Lpw3xONa/z3Un42IvkhYXcBiaRFc6+sr8ViU1vjEy5cXL168IOJ68eJ5HFa0xie+ePnFFxctWhQujGo0zuyO0ODEJYyKiMcVo2K19WpzcugSlk3LwoXvjP9di++BtvTBiYOTQwcPHrzE49rY2Pjrz/Fm+7d7lB+ceD05RFAd5HC93LgYk3KEtl6RmLJIObheYv1vYnCr2Q7uFhFQr4dYUFj4yOTkpc2/B7fiPGVI3xr8e3NokiE1RDQ59Hpz4lXMiQhtbQ2+mth8PWloyORDXh18vbn596vB8S2Fhbp7RJjV+Pggo/EtrBhQrFixYsWKFStWrFixYkVGYW6bcDe0I1aUJVtm5rr6LKz12p7VhP2hBHPbWf2osmdHONuwXVfjXJlgRmCDAS9H/LJZl5rNg4FpuRuhSgWy4tug6+VURZ7HndPM/8bkYUSwFliqBlUcoSuQHedOB6blZgQuGETKBpX8cN7JjvOmArXDw4jiuUYNNoCLu4KOVPawiAu6Phzj3kVDMei3TrRNCmLAvk71ek9jCs5ElhaixnLhGFPwJcK0qGpCMRZWbGnQfjFmzxL/ny9HbxtDUH0eF0N5xPwvccRfxVwBoBIfqDS6dYx3qrSQSAscy8IH7BPMZwxB2zW06HTqTYsLX09aVJ20TaF2oUfAjggVga3xpkX57z+2HHfdaQmd3YsWYmlxmUKolbkQcISn2yAturX+Y8uJK9hJBVoiPucw6xxIS/QKdIBvbmO0ECu/tDS6zYg+zFZK1Q2Ug/yzPwHnD+y96BYENjxa1j+/tAQvGed4WqJhjYIMpxKeKNQ42oh4jDbEvgUrlH12jNN8llARU9rxjjKrEFtih2TrhGwJl1lWBISAPRda0FWsPf6DdgfE1S/YEr0CMoxI1a5AsOAWd3UXKFBscVdHYGNetJx/YBVuYtqPhHuiJjjJtlwIBMC6PPCQA4oqyTQVoMXEOmCMykautKASHmK9ACvkisGGXWhBuMBkxGZBxh/RENxUJLmKd5rPv4qiYUEUgAZrcDnpx83ioHgw2ZH1QQgf1hAMQ6iYx0OHBtcw8GOGWuJBgfVLbChcn9AI52oxNoS4BIvInYfscK0BegJf0gct7r2UlhWNvmjx2VFAwMGyrfinBV4l0AK5+umSPuWzaiat+vHLlx0EvoQr2UY24UkIolhuQtsd9a0hJinFtNxFB1RMy1OIVrOd2f2KYflVhGH9Hw2yfgSWyVyrAAAAAElFTkSuQmCC" />
						</Link>
                    </div>
                    <div className="col-lg-4">
                        <div className="align-self-center">
                            <a className="btn btn-social-icon btn-linkedin" href="https://in.linkedin.com/"><i className="fab fa-linkedin"></i> </a>
                            <a className="btn btn-social-icon btn-twitter" href="https://twitter.com/"><i className="fab fa-twitter"></i> </a>
                            <a className="btn btn-social-icon btn-instagram" href="https://www.instagram.com/"><i className="fab fa-instagram"></i> </a>
                            <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/"><i className="fab fa-facebook"></i> </a>
                            <a className="btn btn-social-icon btn-google" href="https://google.com/"><i className="fab fa-google-plus"></i></a>
                            <a className="btn btn-social-icon btn-google" href="https://youtube.com/"><i className="fab fa-youtube"></i> </a>                            
                        </div>
                        <div className="copyright">
                            <p>Copyright &copy; 2021 WeGrow</p>
                        </div>
                    </div>                
                </div>           
            </div>
        </footer>        
    )
}

export default Footer
