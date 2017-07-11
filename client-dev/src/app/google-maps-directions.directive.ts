import {GoogleMapsAPIWrapper} from '@agm/core/services/google-maps-api-wrapper';
import { Directive,  Input, OnInit} from '@angular/core';
declare var google: any;

@Directive({
  selector: 'agm-directions'
})
export class GoogleMapsDirectionsDirective implements OnInit {

    // @Input() origin;
    // @Input() destination;
    // @Input() waypoints;
    @Input() points;
    constructor(private gmapsApi: GoogleMapsAPIWrapper) { }

    ngOnInit() {
        this.gmapsApi.getNativeMap().then(map => {
            const origin = new google.maps.LatLng(this.points[0].lat, this.points[0].lng);
            const destination = new google.maps.LatLng(this.points[this.points.length - 1].lat, this.points[this.points.length - 1].lng);
            const waypoints = this.points.map(point => {
                return {
                    location: new google.maps.LatLng(point.lat, point.lng),
                    stopover: true
                };
            });

            waypoints.shift();
            waypoints.pop();

            const directionsService = new google.maps.DirectionsService;
            const directionsDisplay = new google.maps.DirectionsRenderer;
            directionsDisplay.setMap(map);
            directionsDisplay.setOptions({
                markerOptions: {visible: false}
            });
            directionsService.route({
                origin: origin,
                destination: destination,
                waypoints: waypoints,
                optimizeWaypoints: false,
                travelMode: 'WALKING'
            }, function(response, status) {
                if (status === 'OK') {
                    directionsDisplay.setDirections(response);
                } else {
                    console.log('Directions request failed due to ' + status);
                }
            });

        });
    }
}
