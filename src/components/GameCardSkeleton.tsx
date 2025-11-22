import { Card, Skeleton, CardBody } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height="200px">
        <CardBody></CardBody>
      </Skeleton>
    </Card>
  );
};

export default GameCardSkeleton;
