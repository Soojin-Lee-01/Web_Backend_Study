package com.group.libraryapp.domain.user;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    // select * from user where name = ?;
    Optional<User> findByName(String name);

    /* By 앞에 넣을 수 있는 것!
    * find : 1건을 가져온다. 반환 타입은 객체 or Optional<타입>
    * findAll : 쿼리의 결과물이 N개인 경우 사용. 반환 타입은 List<타입>
    * exists : 쿼리 결과 존재하는지 확인. 반환 타입은 boolean
    * count : SQL의 결과 개수를 센다. 반환 타입은 long
    */

    /* By 뒤에 넣을 수 있는 것! And나 Or 조합
    * findAllByNameAndAge : select * from user where name = ? and age = ?;
    * findAllByAgeBetween : select * from user where age between ? and ?;
    * GreaterThan : 초과
    * GreaterThanEqual : 이상
    * LessThan : 미만
    * LessThanEqual : 이하
    * startsWith : ~로 시작하는
    * Between : 사이에
    * EndsWith : ~로 끝나는
    * */

}