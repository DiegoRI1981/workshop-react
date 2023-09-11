import { FaCalendarAlt } from 'react-icons/fa';
import { Link } from "react-router-dom"
import { Box, Flex, Text, Tag, Spacer, Button, Icon } from '@chakra-ui/react'



export function LaunchItems(launch) {
    return (
        <Box bg='gray.100' p={4} m={4} borderRadius='lg'>
            <Flex>
                <Text fontSize='2xl'>
                    Mission: <strong>{launch.mission_name}</strong> - ({launch.launch_year})
                </Text>
                <Spacer />
                <Tag p={4} colorScheme={launch.launch_success ? 'green' : 'red'}>{launch.launch_success ? 'Success' : 'Failure'}</Tag>
            </Flex>
            <Flex align='center'>
                <Icon as={FaCalendarAlt} color='grey' />
                <Text fontSize='sm' ml={4} color={'gray'}>{launch.launch_date_local.split('T')[0]}</Text>
            </Flex>
            <Link to={`/${launch.flight_number}`}>
                <Button mt='2' colorScheme={'blackAlpha'}>More Details</Button>
            </Link>
        </Box>
    )
}