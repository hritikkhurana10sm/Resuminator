const dynamicResume= (options, themeOptions)=>{
    return `
    <!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">

    <title>Resume maker</title>
    <style>
        .resume {
            width: 8in;
            height: 10.5in;
        }

        .box {
            background-color: ${themeOptions.wholeBodyColor};
            width: 100%;
            height: 100%;
        }

        .left-side {
            color: ${themeOptions.leftTextColor};
            width: 33%;
            height: 100%;
            background-color: ${themeOptions.leftBackgroundColor};

        }

        .right-side {
            height: 100%;
            width: 65%;
            color: ${themeOptions.rightTextColor};
        }

        .name {
            font-size: 2.4rem;
            font-weight: bolder;
            font-family:'Times New Roman', Times, serif;
        }

        .profile-image {
            width: 90%;
            margin-left: 5%;
            margin-top: 3%;
        }

        .profile-image img {
            border-radius: 50%;
        }

        .heading-text {
            font-size: 1.7rem;
            font-weight: Bold;
        }

        .para,
        .per-info {
            font-size: 1.2rem !important;
        }

        .about .para{
            width: 93%;
        }
        .key-skills li{
            font-size: 1.2rem;
        }

    </style>

</head>

<body>
    <div class="resume border shadow d-flex aligh-items-center jusify-content-center">
        <div class="box">
            <!-- SPELLING MISTAKE -->
            <div class="left-side d-inline-block">
                <div class="profile-image">
                    <img class="img-fluid" src="https://pbs.twimg.com/profile_images/1621609593960034304/nQHOA0bP_400x400.jpg" alt="">
                </div>
                <div class="contact ml-2 mt-2">
                    <div class="heading-text text-uppercase">Contact</div>
                    <p class="para mb-1">
                        House no: 72-2 Haryana, India <br>
                        ${options.phone} <br>
                        ${options.phone} <br>
                        ${options.email} <br>
                        https://hritikkhurana.me
                    </p>
                </div>
                <div class="expert ml-2 mt-2">
                    <div class="heading-text text-uppercase">Expertise Area</div>
                    <p class="para mb-1">
                    ${options.exp_1} <br>
                    ${options.exp_2} <br>
                    ${options.exp_3} <br>
                        Competitive Programming<br>
                    </p>
                </div>

                <div class="skill ml-2 mt-2">
                    <div class="heading-text text-uppercase">IT Skill</div>
                    <p class="para mb-1">
                    ${options.skill}
                    </p>
                </div>


                <div class="hobbies ml-2 mt-2">
                    <div class="heading-text text-uppercase">Hobbies</div>
                    <p class="para mb-1">
                        Cricket<br>
                        Football <br>
                        Watching Movies<br>
                        Travel<br>
                    </p>
                </div>
            </div>
            <div class="right-side d-inline-block m-0 p-0 align-top">
                <h2 class="name text-uppercase ml-3 my-2">${options.name}</h2>

                <div class="contact ml-3 mt-3">
                    <div class="heading-text text-uppercase">About Me</div>
                    <p class="para mb-1">
                    ${options.about}
                    </p>
                </div>
                <div class="personal ml-3 mt-3">
                    <div class="heading-text text-uppercase">Personal Informations</div>
                    <table class="per-info">
                        <tbody>
                            <tr class="border">
                                <td>Father's Name</td>
                                <td>&nbsp;&nbsp;${options.f_name}</td>
                            </tr>
                            <tr class="border">
                                <td>Mather's Name</td>
                                <td>&nbsp;&nbsp;${options.m_name}</td>
                            </tr>
                            <tr class="border">
                                <td>Date of Birth</td>
                                <td>&nbsp;&nbsp;${options.birth}</td>
                            </tr>
                            <tr class="border">
                                <td>Permanent Address</td>
                                <td>&nbsp;&nbsp;Kurukshetra, Haryana</td>
                            </tr>
                        </tbody>

                    </table>
                </div>
                <div class="education ml-3 mt-3">
                    <div class="heading-text text-uppercase">Educational informations</div>
                    <table class="per-info">
                        <tbody>
                            <tr class="border">
                                <td>2019-2023&nbsp;&nbsp;</td>
                                <td>
                                    Bachelor of Technology <br>
                                    CGPA 9.0 <br>
                                    Computer Science and Engineering <br>
                                    Kurukshetra University
                                </td>
                            </tr>
                            <tr class="border">
                                <td>2018-2019&nbsp;&nbsp;</td>
                                <td>
                                    12th CBSE <br>
                                    CGPA 8.75 <br>
                                    Non-Medical <br>
                                    DAV Public School, Kurukshetra
                                </td>
                            </tr>
                            <tr class="border">
                                <td>2016-2017&nbsp;&nbsp;</td>
                                <td>
                                    10th CBSE <br>
                                    CGPA 10.00 <br>
                                </td>
                            </tr>
                        </tbody>

                    </table>
                </div>



                <div class="key-skills ml-3 mt-3">
                    <div class="heading-text text-uppercase">Key Skills</div>
                    <ul class="pl-1">
                        <li>Understanding accounting and financial principles</li>
                        <li>Computer literate and highly proficient in MS excel</li>
                        <li>Strong analytical and problem solving skills</li>
                        <li>Excellent interpersonal, cross-cultural</li>
                        <li>Encourating and inspiring to others</li>
                        <li>Verbal and written communications skill</li>

                    </ul>
                </div>
            </div>
        </div>
    </div>

    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: jQuery and Bootstrap Bundle (includes Popper) -->
    <!-- <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script> -->

    <!-- Option 2: jQuery, Popper.js, and Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
        integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js"
        integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s"
        crossorigin="anonymous"></script>

</body>

</html>
    `;
}



module.exports = dynamicResume ;