import React, { useEffect, useState } from "react";
import { getCurrentDepartment } from "../api/departmentapi";

const DepartmentCard = ({ departmentId }) => {
    const [departmentData, setDepartmentData] = useState(null);
    const [departmentImages, setDepartmentImages] = useState({
        "1": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQSF0FC8iw0Nv6JZl56JRyh_4bYzOK8xwyWg&s",
        "3": "https://www.metmuseum.org/-/media/images/about-the-met/collection-areas/ancient-near-east/ane.jpg?sc_lang=en",
        "4": "https://www.metmuseum.org/-/media/images/about-the-met/collection-areas/arms-and-armor/arms-and-armor_teaser.jpg?sc_lang=en",
        "5": "https://www.metmuseum.org/-/media/images/about-the-met/collection-areas/aaoa/department-page/aaoa_teaser.jpg?sc_lang=en",
        "6": "https://www.metmuseum.org/-/media/images/about-the-met/collection-areas/asian-art/home-page/blogs_720x444.jpg?sc_lang=en",
        "7": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbk4txuGvKvoziZQTNCFXaRMq-f7_Bgns56g&s",
        "8": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ6rYfXdDi9SNzXpR5ALvuCD5twAmvwTF15A&s",
        "9": "https://www.metmuseum.org/-/media/images/about-the-met/collection-areas/drawings-and-prints/zodiac-department-page/materials_techniques_teaser_final.jpg?sc_lang=en&h=720&w=1520&la=en&hash=43F52D085CAFF7B97A734112A844DBF9",
        "10": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo8PrCoBvb6KdfjCpVxiniJbBHhrIvmgyGXQ&s",
        "11": "https://www.metmuseum.org/-/media/images/about-the-met/collection-areas/european-paintings/zodiac-department-page/european_paintings_teaser.jpg?sc_lang=en",
        "12": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyIcaIlh7Qelmc63jA_rL2DJZqwG9muBFLJg&s",
        "13": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Myn76ChypFjMfaJt5JLUOFoQsxzq79r00w&s",
        "14": "https://www.metmuseum.org/-/media/images/about-the-met/collection-areas/islamic/islamic-home-page/landing-page-teasers/blogs_720x444.jpg?sc_lang=en",
        "15": "https://www.metmuseum.org/-/media/images/about-the-met/collection-areas/robert-lehman/lehman.jpg?sc_lang=en",
        "16": "https://www.metmuseum.org/-/media/images/art/libraries-and-research-centers/watson-library/watson-zodiac/about/about_the_library_lg.jpg?sc_lang=en&h=819&w=1520&la=en&hash=DDD62C67360319F8886F81CAA8769596",
        "17": "https://www.metmuseum.org/-/media/images/about-the-met/collection-areas/medieval-art/medieval-zodiac/marquee.jpg?sc_lang=en&h=940&w=2320&la=en&hash=BF6962E50181B31BE1807DACA9B8D0ED",
        "18": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnHyCaIKKMcYc0zV43E5F-ftE_pAq97PaRog&s",
        "19": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCzP9q-CVaNCJgzUo6qcuknzs8rFlvVDVQOQ&s",
        "21": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJCSKML6KrDHr2_4Y3bn434Dyfih7y3bUznw&s",
    });

    useEffect(() => {
        const getDepartmentData = async () => {
            try {
                const departmentInfo = await getCurrentDepartment(departmentId);
                console.log({ departmentInfo });
                setDepartmentData(departmentInfo);
            } catch (error) {
                console.error("Error fetching department data:", error);
            }
        };

        if (departmentId) {
            getDepartmentData();
        }
    }, [departmentId]);

    return (
        <div className="card col-md-3 m-2">
            {departmentData && (
                <div>
                    {departmentImages[departmentData.departmentId] && (
                        <img
                            src={departmentImages[departmentData.departmentId]}
                            alt={departmentData.displayName}
                            className="card-img-top"
                            style={{ width: "100%", height: "200px" }} // Establecer el tamaño deseado de la imagen
                        />
                    )}
                    <div className="card-body text-center">
                        <h5 className="card-title">{departmentData.displayName}</h5>
                        <p className="card-text">ID: {departmentData.departmentId}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DepartmentCard;
