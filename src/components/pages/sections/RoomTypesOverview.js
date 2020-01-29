import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBView, MDBBtn, MDBTypography } from "mdbreact";

const RoomtypesOverview = () => {
  return (
    <MDBCard className="my-5 px-5 pb-5">
      <MDBCardBody>
        <h2 className="h1-responsive font-weight-bold text-center my-5">
        Rooms & Suites
        </h2>
        <p className="text-center w-responsive mx-auto mb-5">
        All the rooms and suites at Starhotel  offer guests an oasis of calm and absolute serenity.
        Thanks to the unique design of this iconic high-rise and its position in the city, 
        each room is totally private and secluded, offering guests their own breath-taking view of the city.
        </p>
        <MDBRow>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src="https://www.labutteauxbois.be/wordpress/wp-content/uploads/2017/10/Hotel-restaurant-spa-lbab-limburg-66.jpg"
                alt=""
              />
              <div href="">
                <MDBMask overlay="white-slight" />
              </div>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7">
            <p href="#!" className="grey-text">
              <h6 className="font-weight-bold mb-3">
                Comfort and Luxury
              </h6>
            </p>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>SUPERIOR ROOM.</strong>
            </h3>
            <p>
            A subtle mix of classic luxury and contemporary design, 
            you’ll immediately feel comfortable and at ease in a Superior Room.
            Enjoy a room with a generous view of the city below, plenty of natural 
            light whilst pampering yourself in the well-appointed bathroom.
            </p>
            <span>
              from
              <MDBTypography className="font-weight-bold d-inline ml-2" tag='h2' variant="h2-responsive">140€</MDBTypography>
            </span>
            <MDBBtn color="elegant" size="md" className="waves-light d-block">
              More info
            </MDBBtn>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
        <MDBRow>
          <MDBCol lg="7">
            <a href="#!" className="grey-text">
              <h6 className="font-weight-bold mb-3">
                Views on top
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>SUPERIOR VISTA.</strong>
            </h3>
            <p>
            Guaranteed skyline views? Check. Enjoy the best the city has to offer with a dramatic and unforgettable vista view over Europe’s capital. 
            Add to this the premium bed linen, high tech touches, luxury amenities and a sumptuous but clean interior and you will feel on top of the world.
            </p>
            <span>
              from
              <MDBTypography className="font-weight-bold d-inline ml-2" tag='h2' variant="h2-responsive">180€</MDBTypography>
            </span>
            <MDBBtn
              color="elegant"
              size="md"
              className="mb-lg-0 mb-4 waves-light d-block"
            >
              More info
            </MDBBtn>
          </MDBCol>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src="https://www.thonhotels.com/globalassets/hoteller/norge/svolvar/thon-hotel-lofoten/romtyper/panorama-superior-room/thon-hotel-lofoten-panorama-superior-1.jpg?width=1100&height=550&mode=crop&quality=80"
                alt=""
                style={{width:408, height:272}}
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
        <MDBRow>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src="https://www.labutteauxbois.be/wordpress/wp-content/uploads/2017/10/Hotel-restaurant-spa-lbab-limburg-34580141160_7d0b226625_o-1280x853.jpg"
                alt=""
              />
              <div>
                <MDBMask overlay="white-slight" />
              </div>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7">
            <a href="#!" className="grey-text">
              <h6 className="font-weight-bold mb-3">
              Experience the view
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>DELUXE PANORAMA.</strong>
            </h3>
            <p>
            Located from the 20th floor upwards, the Deluxe Panorama 
            Rooms offer you unparalleled views of the surrounding city.
            You will also feel that little bit more exceptional as you will have 
            exclusive access to the Panorama Lounge, as well as free breakfast either in 
            the lounge or in The Restaurant.
            </p>
            <span>
              from
              <MDBTypography className="font-weight-bold d-inline ml-2" tag='h2' variant="h2-responsive">200€</MDBTypography>
            </span>
            <MDBBtn color="elegant" size="md" className="waves-light d-block">
              More info
            </MDBBtn>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
        <MDBRow>
          <MDBCol lg="7">
            <a href="#!" className="grey-text">
              <h6 className="font-weight-bold mb-3">
              You will want to stay forever
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>SPLENDOUR SUITE.</strong>
            </h3>
            <p>
            Strategically positioned on the corners of the top floors, 
            these very generously sized suites offer you space, 
            comfort and majestic views over Brussels and beyond.Feel at ease with 
            the world as you enjoy the abundance of natural light, 
            the state-of-the-art décor and every possible amenity and accessory in 
            the room. All in all, a truly remarkable experience.
            </p>
            <span>
              from
              <MDBTypography className="font-weight-bold d-inline ml-2" tag='h2' variant="h2-responsive">230€</MDBTypography>
            </span>
            <MDBBtn
              color="elegant"
              size="md"
              className="mb-lg-0 mb-4 waves-light d-block"
            >
              More info
            </MDBBtn>
          </MDBCol>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src="https://www.labutteauxbois.be/wordpress/wp-content/uploads/2017/10/Hotel-restaurant-spa-lbab-limburg-19-1280x853.jpg"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
        <MDBRow>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src="https://806d2bf04cf5fa54997a-e7c5344b3b84eec5da7b51276407b19c.ssl.cf1.rackcdn.com/responsive/1536/806d2bf04cf5fa54997a-e7c5344b3b84eec5da7b51276407b19c.ssl.cf1.rackcdn.com/responsive/16:9/806d2bf04cf5fa54997a-e7c5344b3b84eec5da7b51276407b19c.ssl.cf1.rackcdn.com/u/conservatorium/bbh/BBH_Penthouse-1.jpg"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7">
            <a href="#!" className="grey-text">
              <h6 className="font-weight-bold mb-3">
              Everything you need and more
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>PANORAMA LOUNGE.</strong>
            </h3>
            <p>
            Our Panorama Lounge on the 24th floor is a peaceful haven 
            where guests staying in Deluxe Panorama rooms and Suites can enjoy a complimentary 
            drink or snack the all-day open bar or browse The Hotel’s library which is richly 
            illustrated with fashion, lifestyle books and glossy magazines. 
            Guests who are staying in a Superior room and who wish to have access as 
            well can be upgraded to a higher room type upon request.
            </p>
            <span>
              from
              <MDBTypography className="font-weight-bold d-inline ml-2" tag='h2' variant="h2-responsive">280€</MDBTypography>
            </span>
            <MDBBtn color="elegant" size="md" className="waves-light d-block">
              More info
            </MDBBtn>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
      </MDBCardBody>
    </MDBCard>
  );
}

export default RoomtypesOverview;