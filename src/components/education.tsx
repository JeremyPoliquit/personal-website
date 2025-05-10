import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function Elementary() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>2011 - 2016</CardTitle>
      </CardHeader>
      <CardContent className="font-semibold">
        DepEd Tayo Likha Molino IV ES - Bacoor City
      </CardContent>
    </Card>
  );
}

export function JuniorHigh() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>2016 - 2021</CardTitle>
      </CardHeader>
      <CardContent className="font-semibold">
        DepEd Tayo City of Bacoor NHS Springville - Bacoor City
      </CardContent>
    </Card>
  );
}

export function SeniorHigh() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>2021 - 2023</CardTitle>
      </CardHeader>
      <CardContent className="font-semibold">
        DepEd Tayo SHS in San Nicholas III, Bacoor City - Bacoor City
      </CardContent>
    </Card>
  );
}

export function College() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Present</CardTitle>
      </CardHeader>
      <CardContent className="font-semibold">
        Cavite State University - Bacoor Campus
      </CardContent>
    </Card>
  );
}
